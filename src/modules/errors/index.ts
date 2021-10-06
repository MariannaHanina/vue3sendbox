import { TErrorsState } from './types';
import { registerModule } from '@/store';
import errorsModule from './store';

registerModule<TErrorsState>('errors', errorsModule);
