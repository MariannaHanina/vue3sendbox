import { TBroker } from '../types';
import { ref, onMounted, ToRef } from 'vue';
import { fetchBrokers } from '../api';

export function getAllBrokers (): { brokers: ToRef<TBroker[]> } {
  const brokers = ref<TBroker[]>([]);

  onMounted(async () => {
    const resultBrokers: TBroker[] = await fetchBrokers();
    brokers.value = resultBrokers;
  });

  return {
    brokers,
  };
}
