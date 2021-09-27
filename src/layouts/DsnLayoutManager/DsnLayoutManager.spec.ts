import { ComponentPublicInstance } from 'vue';
import { VueWrapper, mount } from '@vue/test-utils';
import DsnLayoutManager from '@/layouts/DsnLayoutManager/DsnLayoutManager.vue';

jest.mock('vue-router', () => ({
  useRoute: jest.fn()
    .mockReturnValueOnce({
      meta: {},
    })
    .mockReturnValueOnce({
      meta: {
        layout: 'DsnLayoutNotFound',
      },
    })
    .mockReturnValueOnce({
      meta: {
        layout: 'DsnLayoutNonExistent',
      },
    }),
}));

jest.mock('@/layouts/DsnLayoutDefault/DsnLayoutDefault.vue', () => ({
  name: 'DsnLayoutDefault',
  template: '<div class="dsn-layout-default" />',
}));

jest.mock('@/layouts/DsnLayoutNotFound.vue', () => ({
  name: 'DsnLayoutNotFound',
  template: '<div class="dsn-layout-not-found" />',
}));

describe('AppLayout.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  beforeEach(() => {
    wrapper = mount(DsnLayoutManager);
  })

  test('special layout is not set', () => {
    expect(wrapper.classes()).toContain('dsn-layout-default');
  });

  test('special layout is set', () => {
    expect(wrapper.classes()).toContain('dsn-layout-not-found');
  });

  test('wrong layout is set', () => {
    expect(wrapper.classes()).toContain('dsn-layout-default');
  });
});
