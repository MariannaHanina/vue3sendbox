import { RouteRecordRaw } from 'vue-router';

const route: RouteRecordRaw =
{
  path: '/overview',
  name: 'Overview',
  component: () => import(/* webpackChunkName: "Overview" */ './OverviewPage.vue'),
  meta: {
    inNav: true,
  },
};

export default route;
