import { ComponentPublicInstance, nextTick } from 'vue';
import { mount, VueWrapper } from '@vue/test-utils';
import { topics } from './mockData';
import OverviewTopics from '@/modules/topics/components/OverviewTopics.vue';
import DsnTable from '@/components/DsnTable/DsnTable.vue';
import DsnColumn from '@/components/DsnTable/DsnColumn.vue';
import DsnInput from '@/components/DsnInput.vue';
import { ElIcon, ElTable, ElTableColumn, ElCol, ElRow, ElInput } from 'element-plus';

const mockRouterPush = jest.fn();

jest.mock('vue-router', () => ({
  useRouter: () => ({
    push: mockRouterPush,
  }),
}));

describe('OverviewBrokers.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance & { [key: string]: any }>;
  beforeEach(() => {
    wrapper = mount(OverviewTopics, {
      global: {
        components: {
          DsnColumn,
          DsnInput,
          DsnTable,
          ElCol,
          ElIcon,
          ElInput,
          ElRow,
          ElTable,
          ElTableColumn,
        },
      },
      props: {
        topics: [],
      },
    });
  });
  afterEach(() => {
    jest.resetAllMocks();
  })

  test('pass empty array into users prop', () => {
    expect(wrapper.find('.el-table__row').exists()).not.toBeTruthy();
  });

  test('pass array with two items into users prop', async () => {
    await wrapper.setProps({
      topics,
    });
    expect(wrapper.find('.el-table__row').exists()).toBeTruthy();
  });
  test('rendered input for filter data', () => {
    expect(wrapper.find('.el-input__inner').exists()).toBeTruthy();
  });
  test('pass value to search field and filterHandler was called', async () => {
    const filterHandler = jest.spyOn(wrapper.vm, 'filterHandler');
    const searchInput = wrapper.find('.el-input__inner')
    await searchInput.setValue('some value')

    const inputField: HTMLInputElement = wrapper.find('.el-input__inner').element as HTMLInputElement
    expect(inputField.value).toBe('some value')

    expect(filterHandler).toHaveBeenCalledTimes(1);
  });
  test('clearFilter method was called', async () => {
    const clearFilter = jest.spyOn(wrapper.vm, 'clearFilter');
    const searchInput = wrapper.find('.el-input__inner')
    const inputField: HTMLInputElement = searchInput.element as HTMLInputElement

    await searchInput.setValue('some value')
    expect(inputField.value).toBe('some value')

    await searchInput.setValue('')
    expect(inputField.value).toBe('')

    expect(clearFilter).toHaveBeenCalled()
  });
  test('filterTopics was called', async () => {
    const searchInput = wrapper.find('.el-input__inner')
    const inputField: HTMLInputElement = searchInput.element as HTMLInputElement
    const topic = { name: 'TestName' };
    await searchInput.setValue('TestName')
    expect(inputField.value).toBe('TestName')

    expect(wrapper.vm.filterTopics(topic)).toBe(true)
  });
  test('onRowClick call router push', () => {
    const topic = { name: 'TestName' };
    wrapper.vm.onRowClick(topic);
    expect(mockRouterPush).toHaveBeenCalledTimes(1);
  });
});
