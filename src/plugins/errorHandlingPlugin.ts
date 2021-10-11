import { App } from 'vue';
import { errorHandler, warnHandler } from '@/modules/errors/utils';

export default {
  install (app: App): void {
    app.config.errorHandler = errorHandler;
    app.config.warnHandler = warnHandler;
  },
};
