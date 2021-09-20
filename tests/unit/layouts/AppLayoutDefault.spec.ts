import { shallowMount } from '@vue/test-utils';
import { ElMenu, ElMenuItem } from 'element-plus';
import AppLayoutDefault from '@/layouts/AppLayoutDefault.vue';

jest.mock('vue-router', () => ({
  useRoute: jest.fn().mockImplementation(() => ({
    path: '/home',
  })),
}))

describe('AppLayoutDefault.vue', () => {
  test('active Index equals to current path', () => {
    const wrapper = shallowMount(AppLayoutDefault, {
      global: {
        components: {
          ElMenu,
          ElMenuItem,
        },
      },
    });
    expect(wrapper.vm.activeIndex).toBe('/home');
  });
});
