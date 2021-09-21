
import ApiHttp from '../utils/http';
import { App } from 'vue';

export interface ApiOptions {
  headers: {[key: string]: string};
}
// Создали объект класса, провайднули его и отдали модули, чтобы в main был только use
export default {
  install: (app: App, options:ApiOptions = { headers: {} }): void => {
    const httpClient = new ApiHttp(options.headers);
    app.config.globalProperties.http = httpClient;

    app
      .provide('http', httpClient);
  },
}
