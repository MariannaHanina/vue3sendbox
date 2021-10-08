import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { httpErrorHandler } from '@/modules/errors/utils';
import { TAxiosHeaders } from './http';

export default class AxiosManager {
  axios!: AxiosInstance;

  constructor (axios: AxiosInstance, defaultHeaders: TAxiosHeaders = {}) {
    this.axios = axios;
    this.axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

    this.setInterceptors();
    this.setDefaultHeaders({
      'Content-type': 'application/json',
      ...defaultHeaders,
    });
  }

  setDefaultHeaders (headers: TAxiosHeaders): void {
    this.axios.defaults.headers = {
      ...this.axios.defaults.headers,
      ...headers,
    };
  }

  httpRequestHandler (config: AxiosRequestConfig): AxiosRequestConfig {
    return config;
  }

  httpResponseHandler (response: AxiosResponse): AxiosResponse {
    return response;
  }

  setInterceptors (): void {
    this.axios.interceptors.request.use(
      this.httpRequestHandler,
      httpErrorHandler,
    );

    this.axios.interceptors.response.use(
      this.httpResponseHandler,
      httpErrorHandler,
    );
  }

  setAuthorizationHeader (token: string): void {
    this.axios.defaults.headers.common.Authorization = token;
  }

  deleteAuthorizationHeader (): void {
    delete this.axios.defaults.headers.common.Authorization;
  }
}
