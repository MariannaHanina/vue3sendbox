import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import element from './plugins/element';
import ru from 'element-plus/es/locale/lang/ru';

const app = createApp(App);

app.use(store)
  .use(router)
  .use(element, {
    locale: ru
  })
  .mount('#app');
