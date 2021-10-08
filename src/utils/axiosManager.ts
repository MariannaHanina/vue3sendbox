import { AxiosInstance, AxiosResponse } from 'axios';
import { httpErrorHandler } from './errorHandling';
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

  httpResponseHandler (response: AxiosResponse): AxiosResponse {
    return response;
  }

  setInterceptors (): void {
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
