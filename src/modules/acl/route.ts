import { RouteRecordRaw } from 'vue-router';

const route: RouteRecordRaw = {
  path: '/acl',
  name: 'ACL',
  component: () => import(/* webpackChunkName: "ACL" */ '@/modules/acl/ACLPage.vue'),
  meta: {
    inNav: true,
  },
};

export default route;
