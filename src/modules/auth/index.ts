import { addRoute, addBeforEachHook } from '@/router';
import route, { routerAuthHook } from './route';
import { registerModule } from '@/store';
import authModule from './store';
import { TAuthState } from './types';

addRoute(route);
addBeforEachHook(routerAuthHook);
registerModule<TAuthState>('auth', authModule);
