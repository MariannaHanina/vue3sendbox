import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  NavigationGuard,
} from 'vue-router';
import Overview from '../pages/OverviewPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Overview',
    component: Overview,
    meta: {
      inNav: true,
    },
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue'),
    meta: {
      inNav: true,
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
