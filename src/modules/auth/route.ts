import { RouteRecordRaw } from 'vue-router';

const route: RouteRecordRaw = {
  path: '/login',
  name: 'Auth',
  component: () => import(/* webpackChunkName: "users" */ '@/modules/auth/AuthPage.vue'),
  meta: {
    layout: 'DsnLayoutAuth',
  },
};

export default route;
