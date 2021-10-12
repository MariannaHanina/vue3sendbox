import { TPartition } from '../types';
import { ref, onMounted, ToRef } from 'vue';
import { fetchPartitions } from '../api';

export function getAllPartitions (id: string): ToRef<TPartition[]> {
  const partitions = ref<TPartition[]>([]);

  onMounted(async () => {
    const resultaPartitions: TPartition[] = await fetchPartitions(id);
    partitions.value = resultaPartitions;
  });

  return partitions;
}
