import { App } from 'vue';
import { ElButton } from 'element-plus';

export default (app: App): void => {
  // Global config for Element Plus
  app.config.globalProperties.$ELEMENT = {};

  // Globaly added components from library.
  // Add here for using in app.
  app.use(ElButton)
}
