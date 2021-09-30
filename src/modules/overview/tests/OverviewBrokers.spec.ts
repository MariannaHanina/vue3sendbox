import { ComponentPublicInstance } from '@vue/runtime-core';
import { mount, VueWrapper } from '@vue/test-utils';
import { brokers } from './mockData';
import OverviewBrokers from '@/modules/overview/components/OverviewBrokers.vue';
import DsnTable from '@/components/DsnTable/DsnTable.vue';
import DsnColumn from '@/components/DsnTable/DsnColumn.vue';
import { ElIcon, ElTable, ElTableColumn } from 'element-plus';
import { Edit } from '@element-plus/icons';

describe('OverviewBrokers.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  beforeEach(() => {
    wrapper = mount(OverviewBrokers, {
      global: {
        components: {
          DsnTable,
          DsnColumn,
          ElIcon,
          ElTable,
          ElTableColumn,
          Edit,
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
  })
});
