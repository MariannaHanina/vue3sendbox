import store from '@/store';
import ApiHttpSingleton from '@/utils/http';

const apiHttp = ApiHttpSingleton.getInstance();

export function isAuthenticated (): boolean {
  return store.getters['auth/isAuthenticated'];
}

function getToken (): string | undefined {
  return store.state.auth?.token;
}

export function checkAndSetAuthHeader (): void {
  if (isAuthenticated()) {
    const token = getToken();

    if (!token) return;

    apiHttp.manager.setAuthorizationHeader(token);
  }
}
