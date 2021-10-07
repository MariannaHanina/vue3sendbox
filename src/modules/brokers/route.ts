import { RouteRecordRaw } from 'vue-router';

const route: RouteRecordRaw =
{
  path: '/brokers/:id',
  name: 'Broker',
  component: () => import(/* webpackChunkName: "Broker" */ './BrokerPage.vue'),
  props: true,
};

export default route;
