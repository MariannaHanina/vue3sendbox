import { ComponentPublicInstance } from 'vue';
import { shallowMount, VueWrapper } from '@vue/test-utils';
import DsnLeftNav from './DsnLeftNav.vue';
import DsnNav from '@/components/DsnLayouts/DsnNav.vue';

jest.mock('vue-router', () => ({
  useRoute: jest.fn().mockImplementation(() => ({
    path: '/home',
  })),
  useRouter: jest.fn(() => ({
    getRoutes: () => ([{
      name: 'Home',
      path: './home',
      component: {},
      meta: {
        inNav: true,
      },
    }, {
      name: 'NotFound',
      path: './notFound',
      component: {},
    }]),
  })),
}));

interface Nav {
  activeIndex: string;
  navItems: [];
}

describe('TopNav.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance & Nav>;

  beforeEach(() => {
    wrapper = shallowMount(DsnLeftNav, {
      global: {
        components: {
          DsnNav,
        },
      },
    });
  });

  test('active Index equals to current path', () => {
    expect(wrapper.vm.activeIndex).toBe('/home');
  });

  test('nav items consist from one element', () => {
    expect(wrapper.vm.navItems).toStrictEqual([{
      name: 'Home',
      path: './home',
    }]);
  });
});
