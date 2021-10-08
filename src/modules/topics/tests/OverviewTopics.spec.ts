import { ComponentPublicInstance } from '@vue/runtime-core';
import { mount, VueWrapper } from '@vue/test-utils';
import { topics } from './mockData';
import OverviewTopics from '@/modules/overview/components/OverviewTopics.vue';
import DsnTable from '@/components/DsnTable/DsnTable.vue';
import DsnColumn from '@/components/DsnTable/DsnColumn.vue';
import DsnInput from '@/components/DsnInput.vue';
import { ElIcon, ElTable, ElTableColumn, ElCol, ElRow, ElInput } from 'element-plus';

describe('OverviewBrokers.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  beforeEach(() => {
    wrapper = mount(OverviewTopics, {
      global: {
        components: {
          DsnColumn,
          DsnInput,
          DsnTable,
          ElCol,
          ElIcon,
          ElInput,
          ElRow,
          ElTable,
          ElTableColumn,
        },
      },
      props: {
        topics: [],
      },
    });
  });

  test('pass empty array into users prop', () => {
    expect(wrapper.find('.el-table__row').exists()).not.toBeTruthy();
  });

  test('pass array with two items into users prop', async () => {
    await wrapper.setProps({
      topics,
    });
    expect(wrapper.find('.el-table__row').exists()).toBeTruthy();
  });
  test('rendered input for filter data', () => {
    expect(wrapper.find('.el-input__inner').exists()).toBeTruthy();
  });
});
