import { ComponentPublicInstance } from 'vue';
import { VueWrapper, mount } from '@vue/test-utils';
import AppLayout from '@/layouts/AppLayout.vue';

jest.mock('vue-router', () => ({
  useRoute: jest.fn()
    .mockReturnValueOnce({
      meta: {},
    })
    .mockReturnValueOnce({
      meta: {
        layout: 'AppLayoutNotFound',
      },
    })
    .mockReturnValueOnce({
      meta: {
        layout: 'AppLayoutNonExistent',
      },
    }),
}));

jest.mock('@/layouts/AppLayoutDefault.vue', () => ({
  name: 'AppLayoutDefault',
  template: '<div class="app-layout-default" />',
}));

jest.mock('@/layouts/AppLayoutNotFound.vue', () => ({
  name: 'AppLayoutNotFound',
  template: '<div class="app-layout-not-found" />',
}));

describe('AppLayout.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  beforeEach(() => {
    wrapper = mount(AppLayout);
  })

  test('special layout is not set', () => {
    expect(wrapper.classes()).toContain('app-layout-default');
  });

  test('special layout is set', () => {
    expect(wrapper.classes()).toContain('app-layout-not-found');
  });

  test('wrong layout is set', () => {
    expect(wrapper.classes()).toContain('app-layout-default');
  });
});
