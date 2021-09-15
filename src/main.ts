import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import element from './plugins/element';

const app = createApp(App);

// Connection Element Plus plugin
element(app);

app.use(store)
  .use(router)
  .mount('#app');
