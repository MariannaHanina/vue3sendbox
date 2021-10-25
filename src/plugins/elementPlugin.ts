import { App } from 'vue';
import {
  ElAlert,
  ElAvatar,
  ElButton,
  ElCard,
  ElCol,
  ElDescriptions,
  ElDescriptionsItem,
  ElDrawer,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElInput,
  ElInputNumber,
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
  UserFilled,
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
      .use(ElAvatar)
      .use(ElButton)
      .use(ElCard)
      .use(ElCol)
      .use(ElDescriptions)
      .use(ElDescriptionsItem)
      .use(ElDrawer)
      .use(ElForm)
      .use(ElFormItem)
      .use(ElHeader)
      .use(ElIcon)
      .use(ElInput)
      .use(ElInputNumber)
      .use(ElLoading)
      .use(ElMenu)
      .use(ElMenuItem)
      .use(ElPageHeader)
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
      .component('UserFilled', UserFilled)
      .component('Warning', Warning);
  },
};
