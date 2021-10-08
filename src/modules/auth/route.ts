import { RouteRecordRaw, RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import { isAuthenticated } from './utils';

const route: RouteRecordRaw = {
  path: '/login',
  name: 'Auth',
  component: () => import(/* webpackChunkName: "users" */ '@/modules/auth/AuthPage.vue'),
  meta: {
    layout: 'DsnLayoutAuth',
  },
};

export function routerAuthHook (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
): void {
  if (to.name !== 'Auth' && !isAuthenticated()) {
    next('/login');
    return;
  }
  next();
}

export default route;
