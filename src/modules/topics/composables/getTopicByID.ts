import ApiHttpSingleton from '@/utils/http';
import { TTopic } from '../types';
import { reactive, onMounted } from 'vue';
import { fetchTopic } from '../api';

export function getTopicByID (http: ApiHttpSingleton, id: string): { topic: TTopic } {
  const data = reactive({
    topic: {
      id: '',
      name: '',
      partitions: 0,
      preferred: 0,
      replicated: 0,
      config: false,
      size: 0,
      messages: 0,
    },
  });

  onMounted(async () => {
    const resultTopic: TTopic = await fetchTopic(http, id);
    data.topic = resultTopic
  });

  return data
}
