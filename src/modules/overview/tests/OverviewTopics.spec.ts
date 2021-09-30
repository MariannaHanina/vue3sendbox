import { ComponentPublicInstance } from '@vue/runtime-core';
import { mount, VueWrapper } from '@vue/test-utils';
import { users } from './mockData';
import OverviewTopics from '@/modules/overview/components/OverviewTopics.vue';
import DsnTable from '@/components/DsnTable/DsnTable.vue';
import DsnColumn from '@/components/DsnTable/DsnColumn.vue';
import { ElIcon, ElTable, ElTableColumn } from 'element-plus';

describe('OverviewBrokers.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  beforeEach(() => {
    wrapper = mount(OverviewTopics, {
      global: {
        components: {
          DsnTable,
          DsnColumn,
          ElIcon,
          ElTable,
          ElTableColumn,
        },
      },
      props: {
        users: [],
      },
    });
  });

  test('pass empty array into users prop', () => {
    expect(wrapper.find('.el-table__row').exists()).not.toBeTruthy();
  });

  test('pass array with two items into users prop', async () => {
    await wrapper.setProps({
      users,
    });
    expect(wrapper.find('.el-table__row').exists()).toBeTruthy();
  })
  test('rendered input for filter data', () => {
    expect(wrapper.find('dsn-input').exists()).toBeTruthy();
  });
});
