
import ApiHttp from './http';
import { App } from 'vue';

// Создали объект класса, провайднули его и отдали модули, чтобы в main был только use
const httpClient = new ApiHttp({});
export default {
  install: (app: App): void => {
    app.config.globalProperties.http = httpClient;

    app
      .provide('http', httpClient);
  },
}
