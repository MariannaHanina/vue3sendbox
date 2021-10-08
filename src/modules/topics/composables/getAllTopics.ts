import { TTopic } from '../types';
import { ref, onMounted, ToRef } from 'vue';
import { fetchTopics } from '../api';

export function getAllTopics (): { topics: ToRef<TTopic[]> } {
  const topics = ref<TTopic[]>([]);

  onMounted(async () => {
    const resultTopics: TTopic[] = await fetchTopics();
    topics.value = resultTopics;
  });

  return {
    topics,
  };
}
