import { App } from 'vue';
import {
  ElAlert,
  ElButton,
  ElCol,
  ElDrawer,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElInput,
  ElLoading,
  ElMenu,
  ElMenuItem,
  ElPageHeader,
  ElRow,
  ElSwitch,
  ElTable,
  ElTableColumn,
} from 'element-plus';

import {
  ArrowUpBold,
  Connection,
  Edit,
  Expand,
  Platform,
  Warning,
} from '@element-plus/icons';

export type ComponentSize = 'large' | 'medium' | 'small' | 'mini';

export interface InstallOptions {
  size: ComponentSize;
  zIndex: number;
  // eslint-disable-next-line
  locale?: any;
}

export default {
  install: (app: App, options?: InstallOptions): void => {
    // Global config for Element Plus
    app.config.globalProperties.$ELEMENT = options || {};

    // Globaly added components from library.
    // Add here for using in app.
    app
      .use(ElAlert)
      .use(ElButton)
      .use(ElCol)
      .use(ElDrawer)
      .use(ElForm)
      .use(ElFormItem)
      .use(ElHeader)
      .use(ElIcon)
      .use(ElInput)
      .use(ElPageHeader)
      .use(ElLoading)
      .use(ElMenu)
      .use(ElMenuItem)
      .use(ElRow)
      .use(ElSwitch)
      .use(ElTable)
      .use(ElTableColumn);

    // иконки
    app
      .component('ArrowUpBold', ArrowUpBold)
      .component('Connection', Connection)
      .component('Edit', Edit)
      .component('Expand', Expand)
      .component('Platform', Platform)
      .component('Warning', Warning);
  },
};
