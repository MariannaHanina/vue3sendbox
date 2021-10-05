import { RouteRecordRaw } from 'vue-router';

const route: RouteRecordRaw =
{
  path: '/test',
  name: 'Test',
  component: () => import(/* webpackChunkName: "test" */ './Test.vue'),
  meta: {
    inNav: true,
  },
};

export default route;
