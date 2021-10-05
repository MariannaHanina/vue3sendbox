import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  RouteRecordRaw,
} from 'vue-router';
import store from '@/store';
import Home from '../pages/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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

router.beforeEach((
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next,
) => {
  if (to.name !== 'Auth' && !store.getters['auth/isAuthenticated']) {
    next('/login');
  }
  next();
});

export default router;

export function addRoute (route: RouteRecordRaw): void {
  if (route.name && !router.hasRoute(route.name)) {
    router.addRoute(route);
  }
}
