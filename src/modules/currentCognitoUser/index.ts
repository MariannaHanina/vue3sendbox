import { registerModule } from '@/store';
import currentCognitoUserModule from './store';
import { TCurrentUserState } from './types';

registerModule<TCurrentUserState>('currentCognitoUser', currentCognitoUserModule);
