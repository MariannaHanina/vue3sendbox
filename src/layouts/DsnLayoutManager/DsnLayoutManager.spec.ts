import { ComponentPublicInstance, nextTick } from 'vue';
import { VueWrapper, mount } from '@vue/test-utils';
import DsnLayoutManager from '@/layouts/DsnLayoutManager/DsnLayoutManager.vue';
import { isAuthenticated } from '@/modules/auth/utils';

jest.mock('vue-router', () => ({
  useRoute: jest.fn()
    .mockReturnValueOnce({
      meta: {
        layout: 'DsnLayoutNotFound',
      },
    })
    .mockReturnValueOnce({
      meta: {
        layout: 'DsnLayoutNonExistent',
      },
    })
    .mockReturnValue({
      meta: {},
    }),
}));

jest.mock('@/modules/auth/utils', () => ({
  isAuthenticated: jest.fn(),
}));

jest.mock('@/layouts/DsnLayoutDefault/DsnLayoutDefault.vue',
  () => ({
    name: 'DsnLayoutDefault',
    template: '<div class="dsn-layout-default" />',
  }),
);

jest.mock('@/layouts/DsnLayoutAuth/DsnLayoutAuth.vue',
  () => ({
    name: 'DsnLayoutAuth',
    template: '<div class="dsn-layout-auth" />',
  }),
);

jest.mock('@/layouts/DsnLayoutNotFound/DsnLayoutNotFound.vue',
  () => ({
    name: 'DsnLayoutNotFound',
    template: '<div class="dsn-layout-not-found" />',
  }),
);

describe('AppLayout.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  describe('when user\'s authorized', () => {
    beforeEach(async () => {
      (isAuthenticated as jest.Mock).mockImplementation(() => true);
      wrapper = mount(DsnLayoutManager);
      await nextTick();
    });

    test('special layout is set', () => {
      expect(wrapper.classes()).toContain('dsn-layout-not-found');
    });

    test('wrong layout is set', () => {
      expect(wrapper.classes()).toContain('dsn-layout-default');
    });

    test('special layout is not set', () => {
      expect(wrapper.classes()).toContain('dsn-layout-default');
    });
  });

  describe('when user\'s not authorized', () => {
    beforeEach(async () => {
      (isAuthenticated as jest.Mock).mockImplementation(() => false);
      wrapper = mount(DsnLayoutManager);
      await nextTick();
    });

    test('special layout is not set', () => {
      expect(wrapper.classes()).toContain('dsn-layout-auth');
    });
  });
});
