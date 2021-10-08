import { AxiosError } from 'axios';
import {
  errorHandler,
  warnHandler,
  httpErrorHandler,
} from './utils';
import store from '@/store';

jest.mock('@/store');

describe('errorHandlig utilities', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('errorHandler calls console.log', () => {
    const err = 'error';
    const info = 'info';
    const error = {
      type: 'component',
      details: 'error in undefined -> info',
    };

    errorHandler(err, null, info);
    expect(store.dispatch).toHaveBeenCalledWith('errors/addError', error);
  });

  test('warnHandler calls console.log', () => {
    const msg = 'message';
    const trace = 'trace';
    const error = {
      type: 'warning',
      details: 'message in undefined -> trace',
    };

    warnHandler(msg, null, trace);
    expect(store.dispatch).toHaveBeenCalledWith('errors/addError', error);
  });

  // describe('httpErrorHandler', () => {
  //   test('calls console.log with error data and code', async () => {
  //     try {
  //       await httpErrorHandler(error);
  //     } catch (e) {}

  //     expect(consoleSpy.mock.calls[0][1]).toBe(error.response?.data);
  //     expect(consoleSpy.mock.calls[0][2]).toBe(error.response?.status);
  //   });

  //   test('doesn`t call console.log if error code doesn`t come', async () => {
  //     try {
  //       await httpErrorHandler(errorWithoutStatus);
  //     } catch (e) {}

  //     expect(consoleSpy).not.toHaveBeenCalled();
  //   })

  //   test('returns Promise reject', async () => {
  //     try {
  //       await httpErrorHandler(error);
  //     } catch (e) {
  //       expect(e).toBe(error);
  //     }
  //   });
  // });
});
