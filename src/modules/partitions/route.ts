import { RouteRecordRaw } from 'vue-router';

const route: RouteRecordRaw =
{
  path: '/partitions/:id',
  name: 'Partition',
  component: () => import(/* webpackChunkName: "Partition" */ './PartitionPage.vue'),
  props: true,
};

export default route;
