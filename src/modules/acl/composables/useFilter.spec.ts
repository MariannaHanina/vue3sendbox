import { ref } from 'vue';
import useFilter from './useFilter';

type TItem = {
  param1: string;
  param2: string;
}

describe('useFilter', () => {
  let filter: () => TItem[];
  const list = ref([{
    param1: 'abc',
    param2: 'def',
  }, {
    param1: 'ijk',
    param2: 'def',
  }]);
  const searchText = ref('');

  beforeEach(() => {
    const filterModule = useFilter<TItem>(list, searchText);
    filter = filterModule.filter;
  });

  test('with empty search string returns full list', () => {
    searchText.value = '';
    const filteredList = filter();

    expect(filteredList).toEqual(list.value);
  });

  test('with search string "abc" returns first item of list', () => {
    searchText.value = 'abc';
    const filteredList = filter();

    expect(filteredList).toEqual([list.value[0]]);
  });

  test('with search string "def" returns full list', () => {
    searchText.value = 'def';
    const filteredList = filter();

    expect(filteredList).toEqual(list.value);
  });

  test('with search string "!def" returns empty list', () => {
    searchText.value = '!def';
    const filteredList = filter();

    expect(filteredList).toEqual([]);
  });
});
