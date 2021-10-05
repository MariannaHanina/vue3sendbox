import { addRoute } from '@/router';
import route from './route';
import { registerModule } from '@/store';
import usersModule from './store';
import { TUsersState } from './types';

addRoute(route);
registerModule<TUsersState>('users', usersModule);
