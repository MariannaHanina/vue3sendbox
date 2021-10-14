import { mount, VueWrapper } from '@vue/test-utils';
import DsnColumn from '@/components/DsnTable/DsnColumn.vue';
import DsnTable from '@/components/DsnTable/DsnTable.vue';
import { ElTableColumn, ElTable } from 'element-plus';
import { ComponentPublicInstance } from 'vue';

jest.mock('@/composables/useLoading', () => {
  return () => ({
    loading: true,
  });
});

describe('DsnTable.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;
  const global = {
    components: {
      DsnColumn,
      ElTableColumn,
      ElTable,
    },
    directives: {
      loading: jest.fn(),
    },
  };

  beforeEach(() => {
    wrapper = mount(DsnTable, {
      props: {
        data: [],
      },
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
