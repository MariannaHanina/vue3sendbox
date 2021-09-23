import router from '@/router';
import route from './route';
import store from '@/store';
import usersModule from './store';

if (route.name && !router.hasRoute(route.name)) {
  router.addRoute(route);
}

if (!store.hasModule('users')) {
  store.registerModule('users', usersModule);
}
