import { ComponentPublicInstance, nextTick } from 'vue';
import { VueWrapper, shallowMount } from '@vue/test-utils';
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

describe('AppLayoutManager.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  describe('when user\'s authorized', () => {
    beforeEach(async () => {
      (isAuthenticated as jest.Mock).mockImplementation(() => true);
      wrapper = shallowMount(DsnLayoutManager);
      await nextTick();
    });

    test('special layout is set', () => {
      const DsnLayoutNotFound = wrapper.findComponent({ name: 'DsnLayoutNotFound' });
      expect(DsnLayoutNotFound.exists()).toBeTruthy();
    });

    test('wrong layout is set', () => {
      const DsnLayoutNonExistent = wrapper.findComponent({ name: 'DsnLayoutNonExistent' });
      expect(DsnLayoutNonExistent.exists()).toBeFalsy();
    });

    test('special layout is not set and default layout is used', () => {
      const DsnLayoutDefault = wrapper.findComponent({ name: 'DsnLayoutDefault' });
      expect(DsnLayoutDefault.exists()).toBeTruthy();
    });
  });

  describe('when user\'s not authorized', () => {
    beforeEach(async () => {
      (isAuthenticated as jest.Mock).mockImplementation(() => false);
      wrapper = shallowMount(DsnLayoutManager);
      await nextTick();
    });

    test('special layout is not set', () => {
      const DsnLayoutAuth = wrapper.findComponent({ name: 'DsnLayoutAuth' });
      expect(DsnLayoutAuth.exists()).toBeTruthy();
    });
  });
});
