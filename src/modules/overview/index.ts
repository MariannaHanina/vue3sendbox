import router from '@/router';
import route from './route';

if (route.name && !router.hasRoute(route.name)) {
  router.addRoute(route);
}
