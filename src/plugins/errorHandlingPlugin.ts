import { App } from 'vue';
import { errorHandler, warnHandler } from '@/utils/errorHandling';

export default {
  install (app: App): void {
    app.config.errorHandler = errorHandler;
    app.config.warnHandler = warnHandler;
  },
};
