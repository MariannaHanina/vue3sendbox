import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ru from 'element-plus/es/locale/lang/ru';

import element from './plugins/elementPlugin';
import errorHandling from './plugins/errorHandlingPlugin';
import http from './plugins/httpPlugin';
import ws from './plugins/websocketPlugin';

import registerComponents from './registerComponents';
import '@/modules';

import './styles/tailwind.css';

const app = createApp(App);

app.use(store)
  .use(router)
  .use(element, {
    locale: ru,
  })
  .use(errorHandling)
  .use(http)
  .use(ws)
  .mount('#app');

registerComponents(app);
