
import WSClient from '../utils/websocket';
import { App } from 'vue';

export interface WSOptions {
  url:string;
}
// Создали объект класса, провайднули его и отдали модули, чтобы в main был только use
export default {
  install: (app: App): void => {
    const wsClient = new WSClient();
    app.config.globalProperties.ws = wsClient;

    app
      .provide('wsp', wsClient);
  },
};
