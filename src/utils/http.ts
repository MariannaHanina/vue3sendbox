import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export const axios: AxiosInstance = Axios.create({
  headers: {
    'Content-type': 'application/json',
  },
});

const BASE_URL = process.env.VUE_APP_API_BASE_URL;

// export default class ApiHttp {
const headers = {} as [string];

async function get (url: string, params = {}): Promise<string> {
  const config = Object.assign({}, { headers: headers }, { params }) as AxiosRequestConfig;
  const targetUrl = BASE_URL + url;
  return axios.get(targetUrl, config).then(response => {
    return response.data;
  });
}

export default { get }
// }

// Add a response interceptor
axios.interceptors.response.use((response: AxiosResponse) => {
  // Do something with response data
  // console.log(response.data);

  return response;
}, error => {
  const errorCode = error.response.status;
  const errorData = error.response.data;

  if (errorCode) {
    switch (+errorCode) {
      // ошибка аутентификации
      case 400: {
        console.log('response error:', errorData, errorCode);
        break;
      }
      default:
        console.log('response error:', errorData, errorCode);
        // store.commit('WRITE_DEBUG_LOG', { type: 'http.interceptor.taskerror', info: JSON.stringify(err) });
    }
  }
  // Do something with response error
  return Promise.reject(error);
});
