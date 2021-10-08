import { AxiosError } from 'axios';
import {
  errorHandler,
  warnHandler,
  httpErrorHandler,
} from './errorHandling';

describe('errorHandlig utilities', () => {
  let consoleSpy: jest.SpyInstance;
  const error = {
    response: {
      status: '404',
      data: 'page not found',
    },
  } as unknown as AxiosError;

  const errorWithoutStatus = {
    response: {
      data: 'page not found',
    },
  } as unknown as AxiosError;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('errorHandler calls console.log', () => {
    const info = 'some info string';
    errorHandler(error, null, info);

    expect(consoleSpy.mock.calls[0][1]).toBe(error);
    expect(consoleSpy.mock.calls[0][3]).toBe(info);
  });

  test('warnHandler calls console.log', () => {
    const msg = 'warning message';
    const info = 'some warning info string';
    warnHandler(msg, null, info);

    expect(consoleSpy.mock.calls[0][1]).toBe(msg);
    expect(consoleSpy.mock.calls[0][3]).toBe(info);
  });

  describe('httpErrorHandler', () => {
    test('calls console.log with error data and code', async () => {
      try {
        await httpErrorHandler(error);
      } catch (e) {}

      expect(consoleSpy.mock.calls[0][1]).toBe(error.response?.data);
      expect(consoleSpy.mock.calls[0][2]).toBe(error.response?.status);
    });

    test('doesn`t call console.log if error code doesn`t come', async () => {
      try {
        await httpErrorHandler(errorWithoutStatus);
      } catch (e) {}

      expect(consoleSpy).not.toHaveBeenCalled();
    });

    test('returns Promise reject', async () => {
      try {
        await httpErrorHandler(error);
      } catch (e) {
        expect(e).toBe(error);
      }
    });
  });
});
