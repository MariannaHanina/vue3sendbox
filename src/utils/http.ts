import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export const axios: AxiosInstance = Axios.create({
  headers: {
    'Content-type': 'application/json',
  },
});

const BASE_URL = process.env.VUE_APP_API_BASE_URL;
export default class ApiHttp {
  headers: {[key: string]: string};

  constructor (headers: {[key: string]: string}) {
    this.headers = headers;
  }

  async get (url: string, params = {}): Promise<string> {
    const config = Object.assign({}, { headers: this.headers }, { params }) as AxiosRequestConfig;
    const targetUrl = BASE_URL + url;
    return axios.get(targetUrl, config).then(response => {
      return response.data;
    });
  }
}

axios.interceptors.response.use((response: AxiosResponse) => {
  return response;
}, error => {
  const errorCode = error.response.status;
  const errorData = error.response.data;

  if (errorCode) {
    switch (+errorCode) {
      case 400: {
        console.log('response error:', errorData, errorCode);
        break;
      }
      default:
        console.log('response error:', errorData, errorCode);
    }
  }
  return Promise.reject(error);
});
