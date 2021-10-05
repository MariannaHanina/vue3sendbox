import { addRoute } from '@/router';
import route from './route';
import { registerModule } from '@/store';
import authModule from './store';
import { TAuthState } from './types';

addRoute(route);
registerModule<TAuthState>('auth', authModule);
