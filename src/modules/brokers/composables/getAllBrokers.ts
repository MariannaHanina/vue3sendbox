import ApiHttpSingleton from '@/utils/http';
import { TBroker } from '../types';
import { ref, onMounted, ToRef } from 'vue';
import { fetchBrokers } from '../api';

export function getAllBrokers (http: ApiHttpSingleton): { brokers: ToRef<TBroker[]> } {
  const brokers = ref<TBroker[]>([]);

  onMounted(async () => {
    const resultBrokers: TBroker[] = await fetchBrokers(http);
    brokers.value = resultBrokers
  });

  return {
    brokers,
  }
}
