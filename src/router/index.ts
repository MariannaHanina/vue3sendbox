import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  NavigationGuard,
} from 'vue-router';
import Overview from '../pages/ClustersOverview.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Overview',
    component: Overview,
    meta: {
      layout: 'DsnLayoutMain',
    },
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    meta: {
      layout: 'DsnLayoutNotFound',
    },
    component: () => import(/* webpackChunkName: "error" */ '../pages/notFound/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

export function addRoute (route: RouteRecordRaw): void {
  if (route.name && !router.hasRoute(route.name)) {
    router.addRoute(route);
  }
}

export function addBeforeEachHook (hook: NavigationGuard): void {
  router.beforeEach(hook);
}
