import { ComponentPublicInstance } from 'vue';
import { VueWrapper, shallowMount } from '@vue/test-utils';
import DsnPageHeader from '@/components/DsnPageHeader.vue';
import NotFoundPage from '@/pages/notFound/NotFound.vue';

const mockRouterGo = jest.fn();

jest.mock('vue-router', () => ({
  useRouter: () => ({
    go: mockRouterGo,
  }),
}));

describe('NotFound.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance & typeof NotFoundPage>;

  beforeEach(() => {
    wrapper = shallowMount(NotFoundPage, {
      global: {
        components: {
          DsnPageHeader,
        },
      },
    });
  });

  test('page has DsnPageHeader component', () => {
    const dsnPageHeader = wrapper.findComponent({ name: 'dsn-page-header' });

    expect(dsnPageHeader.exists()).toBeTruthy();
  });

  test('goBack method calls router method go', () => {
    const vm = wrapper.vm;
    vm.goBack();

    expect(mockRouterGo).toHaveBeenCalled();
  });
});
