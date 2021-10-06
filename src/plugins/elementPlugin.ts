import { App } from 'vue';
import {
  ElAlert,
  ElButton,
  ElCol,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElInput,
  ElMenu,
  ElMenuItem,
  ElPageHeader,
  ElRow,
  ElSwitch,
  ElTable,
  ElTableColumn,
} from 'element-plus';

import { Edit } from '@element-plus/icons';

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
      .use(ElForm)
      .use(ElFormItem)
      .use(ElHeader)
      .use(ElIcon)
      .use(ElInput)
      .use(ElPageHeader)
      .use(ElMenu)
      .use(ElMenuItem)
      .use(ElRow)
      .use(ElSwitch)
      .use(ElTable)
      .use(ElTableColumn)

    // иконки
    app
      .component('Edit', Edit);
  },
}
