import ApiHttpSingleton from '@/utils/http';
import { TBroker } from './types';
import { ref, onMounted, ToRef } from 'vue';

export function getAllBrokers (http: ApiHttpSingleton): { brokers: ToRef<TBroker[]> } {
  const brokers = ref<TBroker[]>([]);

  onMounted(async () => {
    const resultBrokers: TBroker[] = await http.get<TBroker[]>('/brokers');
    brokers.value = resultBrokers
  });

  return {
    brokers,
  }
}
