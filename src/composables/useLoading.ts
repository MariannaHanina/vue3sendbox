import { ref, watch, Ref } from 'vue';

interface ILoading {
  loading: Ref<boolean>;
}

export default function useLoading<T> (entities: Ref<T[]>): ILoading {
  const loading = ref(true);

  watch(entities, (entities) => {
    if (entities.length) {
      loading.value = false;
    }
  });

  return {
    loading,
  };
}
