import { ComponentPublicInstance } from 'vue';
import { VueWrapper, mount } from '@vue/test-utils';
import { ElPageHeader } from 'element-plus';
import NotFoundPage from '@/pages/NotFound.vue';

const mockRouterGo = jest.fn();

jest.mock('vue-router', () => ({
  useRouter: () => ({
    go: mockRouterGo
  })
}));

describe('NotFound.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;

  beforeEach(() => {
    wrapper = mount(NotFoundPage, {
      global: {
        components: {
          ElPageHeader
        }
      }
    });
  });

  test('click on Back button go to one stap back', () => {
    wrapper.findComponent({ name: 'el-page-header' }).vm.$emit('back');

    expect(mockRouterGo).toHaveBeenCalledTimes(1);
  });
});
