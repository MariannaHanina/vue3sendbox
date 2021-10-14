import { ComponentPublicInstance } from '@vue/runtime-core';
import { mount, VueWrapper } from '@vue/test-utils';
import { brokers } from './mockData';
import OverviewBrokers from '@/modules/brokers/components/OverviewBrokers.vue';
import DsnTable from '@/components/DsnTable/DsnTable.vue';
import DsnColumn from '@/components/DsnTable/DsnColumn.vue';
import DsnInput from '@/components/DsnInput.vue';
import { ElIcon, ElTable, ElTableColumn, ElCol, ElRow } from 'element-plus';
import { Edit } from '@element-plus/icons';

jest.mock('@/composables/useLoading', () => {
  return () => ({
    loading: true,
  });
});

describe('OverviewBrokers.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  beforeEach(() => {
    wrapper = mount(OverviewBrokers, {
      global: {
        components: {
          DsnColumn,
          DsnInput,
          DsnTable,
          ElCol,
          ElIcon,
          ElRow,
          ElTable,
          ElTableColumn,
          Edit,
        },
        directives: {
          loading: jest.fn(),
        },
      },
      props: {
        brokers: [],
      },
    });
  });

  test('pass empty array into brokers prop', () => {
    expect(wrapper.find('.el-table__row').exists()).not.toBeTruthy();
  });

  test('pass array with two items into brokers prop', async () => {
    await wrapper.setProps({
      brokers,
    });
    expect(wrapper.find('.el-table__row').exists()).toBeTruthy();
  });
});
