import { mount, VueWrapper } from '@vue/test-utils';
import DsnColumn from '@/components/DsnTable/DsnColumn.vue';
import DsnTable from '@/components/DsnTable/DsnTable.vue';
import { ElTableColumn, ElTable } from 'element-plus';
import { ComponentPublicInstance } from 'vue';

describe('DsnTable.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;
  const global = {
    components: {
      DsnColumn, ElTableColumn, ElTable,
    },
  };

  beforeEach(() => {
    wrapper = mount(DsnTable, {
      global,
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('check table was rendered', async () => {
    expect(wrapper.findComponent({ name: 'el-table' }).exists()).toBeTruthy();
  });
});
