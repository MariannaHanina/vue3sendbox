import { AxiosError } from 'axios';
import {
  errorHandler,
  warnHandler,
  httpErrorHandler,
  codeErrorHandler,
} from './utils';
import store from '@/store';

jest.mock('@/store');

describe('errorHandlig utilities', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('errorHandler calls special dispatch with needed params', () => {
    const err = 'error';
    const info = 'info';
    const error = {
      type: 'component',
      details: 'error in undefined -> info',
    };

    errorHandler(err, null, info);
    expect(store.dispatch).toHaveBeenCalledWith('errors/addError', error);
  });

  test('warnHandler calls special dispatch with needed params', () => {
    const msg = 'message';
    const trace = 'trace';
    const error = {
      type: 'warning',
      details: 'message in undefined -> trace',
    };

    warnHandler(msg, null, trace);
    expect(store.dispatch).toHaveBeenCalledWith('errors/addError', error);
  });

  test('httpErrorHandler calls special dispatch with needed params', async () => {
    const err = {
      message: 'message',
      config: {
        method: 'method',
        baseURL: 'baseURL',
        url: 'url',
      },
    } as unknown as AxiosError;

    const error = {
      type: 'http',
      details: 'message for METHOD: baseURLurl',
    };

    httpErrorHandler(err);
    expect(store.dispatch).toHaveBeenCalledWith('errors/addError', error);
  });

  test('codeErrorHandler calls special dispatch with needed params', () => {
    const err = new Error('some error');

    const error = {
      type: 'code',
      details: 'Error: some error',
    };

    codeErrorHandler(err);
    expect(store.dispatch).toHaveBeenCalledWith('errors/addError', error);
  });
});
