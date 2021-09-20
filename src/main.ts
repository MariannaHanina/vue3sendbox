import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import element from './plugins/element';
import ru from 'element-plus/es/locale/lang/ru';
import { errorHandler, warnHandler } from './utils/errorHandling';
import axios from 'axios'
import VueAxios from 'vue-axios'
import http from './utils/http';

const app = createApp(App);

app.use(store)
  .use(router)
  .use(element, {
    locale: ru,
  })
  .use(VueAxios, axios)
  .provide('http', http)
  .mount('#app');

app.config.errorHandler = errorHandler;
app.config.warnHandler = warnHandler;
