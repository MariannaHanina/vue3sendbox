import axios, { AxiosInstance, AxiosResponse } from 'axios';
import AxiosManager from './axiosManager';
import { httpErrorHandler } from './errorHandling';

jest.mock('axios');
jest.mock('./errorHandling');

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

      beforeEach(() => {
        firstCallArgs = (axiosManager.axios.interceptors.response.use as jest.Mock).mock.calls[0];
      });

      test('appointed interceptors for axios success response handler', () => {
        expect(firstCallArgs[0]).toBe(axiosManager.httpResponseHandler);
      });

      test('appointed interceptors for axios error handler', () => {
        expect(firstCallArgs[1]).toBe(httpErrorHandler);
      });
    });

    test('httpResponseHandler return the same as it receives', () => {
      const data = { data: 'test' } as AxiosResponse;
      const response = axiosManager.httpResponseHandler(data);
      expect(response).toBe(data);
    })

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
