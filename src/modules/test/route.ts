import { RouteRecordRaw } from 'vue-router';

const route: RouteRecordRaw =
{
  path: '/test',
  name: 'Test',
  component: () => import(/* webpackChunkName: "test" */ './Test.vue'),
};

export default route;
