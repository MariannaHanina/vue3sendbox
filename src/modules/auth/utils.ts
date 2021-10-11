import store from '@/store';
import ApiHttpSingleton from '@/utils/http';

const apiHttp = ApiHttpSingleton.getInstance();
const LOCAL_STORAGE = 'dsn-token';

export function isAuthenticated (): boolean {
  return store.getters['auth/isAuthenticated'];
}

export function getToken (): string | null {
  return localStorage.getItem(LOCAL_STORAGE);
}

export function setToken (token: string): void {
  localStorage.setItem(LOCAL_STORAGE, token);
}

export function deleteToken (): void {
  localStorage.removeItem(LOCAL_STORAGE);
}

export function checkAndSetAuthHeader (): void {
  if (isAuthenticated()) {
    const token = getToken();

    if (!token) return;

    apiHttp.manager.setAuthorizationHeader(token);
  }
}
