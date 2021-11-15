import { ComponentPublicInstance } from '@vue/runtime-core';
import { shallowMount, VueWrapper } from '@vue/test-utils';
import UserList from '@/modules/users/components/UserList.vue';
import { users } from './mockData';
import { ElAlert } from 'element-plus';
import DsnHeading2 from '@/components/DsnHeading2.vue';
import DsnTable from '@/components/DsnTable/DsnTable.vue';
import DsnColumn from '@/components/DsnTable/DsnColumn.vue';
import DsnButton from '@/components/DsnButton/DsnButton.vue';

describe('UserList.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  beforeEach(() => {
    wrapper = shallowMount(UserList, {
      props: {
        users: [],
      },
      global: {
        components: {
          ElAlert,
          DsnHeading2,
          DsnTable,
          DsnColumn,
          DsnButton,
        },
      },
    });
  });

  test('pass empty array into users prop', () => {
    expect(wrapper.findComponent({ name: 'el-alert' }).exists()).toBeTruthy();
  });

  test('pass array with two items into users prop', async () => {
    await wrapper.setProps({
      users,
    });

    expect(wrapper.findComponent({ name: 'DsnTable' }).exists()).toBeTruthy();
  });
});
