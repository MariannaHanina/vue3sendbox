import { RouteRecordRaw } from 'vue-router';

const route: RouteRecordRaw =
{
  path: '/topics/:id',
  name: 'Topic',
  component: () => import(/* webpackChunkName: "Overview" */ './TopicPage.vue'),
  props: true,
};

export default route;
