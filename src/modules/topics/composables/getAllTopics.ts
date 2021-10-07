import ApiHttpSingleton from '@/utils/http';
import { TTopic } from '../types';
import { ref, onMounted, ToRef } from 'vue';
import { fetchTopics } from '../api';

export function getAllTopics (http: ApiHttpSingleton): { topics: ToRef<TTopic[]> } {
  const topics = ref<TTopic[]>([]);

  onMounted(async () => {
    const resultTopics: TTopic[] = await fetchTopics(http);
    topics.value = resultTopics
  });

  return {
    topics,
  }
}
