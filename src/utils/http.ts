import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import AxiosManager from './axiosManager';

export type TAxiosHeaders = {[key: string]: string};

export default class ApiHttpSingleton {
  private static instance: ApiHttpSingleton;
  axios!: AxiosInstance;
  manager!: AxiosManager;

  private constructor (headers: TAxiosHeaders = {}) {
    this.axios = Axios.create();
    this.manager = new AxiosManager(this.axios, headers);
  }

  public static getInstance (headers: TAxiosHeaders = {}): ApiHttpSingleton {
    if (!ApiHttpSingleton.instance) {
      ApiHttpSingleton.instance = new ApiHttpSingleton(headers);
    }

    return ApiHttpSingleton.instance;
  }

  async get<T> (url: string, config: AxiosRequestConfig = {}): Promise<T> {
    const { data } = await this.axios.get(`${url}`, config);
    return data;
  }
}
