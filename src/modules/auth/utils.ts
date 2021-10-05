import store from '@/store';

export function isAuthenticated (): boolean {
  return store.getters['auth/isAuthenticated'];
}
