import { Ref } from 'vue';

interface IFilter<T> {
  filter(): T[];
}

export default function useFilter<T> (
  list: Ref<T[]>,
  searchText: Ref<string>,
): IFilter<T> {
  const filter = () => {
    const searchTexts = splitSearchText(searchText.value);
    if (searchTexts.length) {
      return list.value.filter(item => searchInLine<T>(item, searchTexts));
    }
    return list.value;
  };

  function splitSearchText (searchText: string): string[] {
    const trimmedText = searchText.trim();
    return trimmedText.length ? trimmedText.split(' ') : [];
  }

  function searchInLine<T> (entityObj: T, searchTexts: string[]) {
    let isSuitable = true;
    const values = Object.values(entityObj);
    const line = values.map(value => value.toLowerCase()).join(' ');

    searchTexts.forEach(text => {
      const isIgnored = text.search('!') === 0;

      if (isIgnored) {
        text = text.substr(1, text.length);
      }

      if (
        (isIgnored && text.length && line.search(text) >= 0) ||
        (!isIgnored && line.search(text) === -1)
      ) {
        isSuitable = false;
      }
    });

    return isSuitable;
  }

  return {
    filter,
  };
}
