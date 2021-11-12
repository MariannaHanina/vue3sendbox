import { RouteRecordRaw } from 'vue-router';

const route: RouteRecordRaw = {
  path: '/cluster/:id',
  name: 'Cluster',
  component: () => import(/* webpackChunkName: "Cluster" */ '@/modules/clusters/ClusterPage.vue'),
  meta: {
    inNav: true,
  },
};

export default route;
