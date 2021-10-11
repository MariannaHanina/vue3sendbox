import axios, { AxiosInstance, AxiosResponse } from 'axios';
import AxiosManager from './axiosManager';
import { httpErrorHandler } from '@/modules/errors/utils';

jest.mock('axios');
jest.mock('@/modules/errors/utils');

describe('AxiosManager class', () => {
  let axiosManager: AxiosManager;
  const savedMethod = AxiosManager.prototype.setInterceptors;

  describe('an instance was created', () => {
    const axiosMock = {
      defaults: {},
    } as AxiosInstance;

    beforeEach(() => {
      AxiosManager.prototype.setInterceptors = jest.fn();
      axiosManager = new AxiosManager(axiosMock);
    });

    test('local axios param was set', () => {
      expect(axiosManager.axios).toEqual(axiosMock);
    });

    test('baseUrl was set', () => {
      expect(axiosManager.axios.defaults.baseURL).toBeDefined();
    });

    test('interseptors were set', () => {
      expect(axiosManager.setInterceptors).toHaveBeenCalledTimes(1);
    });
  });

  describe('methods', () => {
    beforeEach(() => {
      AxiosManager.prototype.setInterceptors = savedMethod;
      axiosManager = new AxiosManager(axios);
    });

    describe('setInterceptors', () => {
      let firstCallArgs: Array<()=>void>;
      let secondCallArgs: Array<()=>void>;

      beforeEach(() => {
        firstCallArgs = (axiosManager.axios.interceptors.request.use as jest.Mock).mock.calls[0];
        secondCallArgs = (axiosManager.axios.interceptors.response.use as jest.Mock).mock.calls[1];
      });

      test('appointed interceptors for axios success request handler', () => {
        expect(firstCallArgs[0]).toBe(axiosManager.httpRequestHandler);
      });

      test('appointed interceptors for axios error handler', () => {
        expect(firstCallArgs[1]).toBe(httpErrorHandler);
      });

      test('appointed interceptors for axios success response handler', () => {
        expect(secondCallArgs[0]).toBe(axiosManager.httpResponseHandler);
      });
    });

    test('httpResponseHandler return the same as it receives', () => {
      const data = { data: 'test' } as AxiosResponse;
      const response = axiosManager.httpResponseHandler(data);
      expect(response).toBe(data);
    });

    test('setAuthorizationHeader sets token into appropriate header', () => {
      const token = '123456';

      axiosManager.setAuthorizationHeader(token);
      expect(axiosManager.axios.defaults.headers.common.Authorization).toBe(token);
    });

    test('deleteAuthorizationHeader deletes token from appropriate header', () => {
      axiosManager.deleteAuthorizationHeader();
      expect(axiosManager.axios.defaults.headers.common.Authorization).toBeUndefined();
    });
  });
});
