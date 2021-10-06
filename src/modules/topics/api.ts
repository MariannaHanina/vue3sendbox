import ApiHttpSingleton from '@/utils/http';
import { TTopic } from './types';
import { ref, onMounted, ToRef } from 'vue';

export function getAllTopics (http: ApiHttpSingleton): { topics: ToRef<TTopic[]> } {
  const topics = ref<TTopic[]>([]);

  onMounted(async () => {
    const resultTopics: TTopic[] = await http.get<TTopic[]>('/topics');
    topics.value = resultTopics
  });

  return {
    topics,
  }
}
