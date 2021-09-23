import { ComponentPublicInstance } from '@vue/runtime-core';
import { mount, VueWrapper } from '@vue/test-utils';
import UserList from '@/modules/users/components/UserList.vue';
import { users } from './mockData';
import { ElAlert } from 'element-plus';
import DsnHeading2 from '@/components/DsnHeading2.vue';

describe('UserList.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  beforeEach(() => {
    wrapper = mount(UserList, {
      props: {
        users: [],
      },
      global: {
        components: {
          ElAlert,
          DsnHeading2,
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

    expect(wrapper.find('ul').exists()).toBeTruthy();
  })
});
