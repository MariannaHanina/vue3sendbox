import { RouteRecordRaw } from 'vue-router';

const route: RouteRecordRaw = {
  path: '/users',
  name: 'Users',
  component: () => import(/* webpackChunkName: "users" */ '@/modules/users/UsersPage.vue'),
};

export default route;
