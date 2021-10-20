import { TClusterSummary } from '../types';
import { ref, onMounted, ToRef } from 'vue';
import { fetchClusterSummary } from '../api';

export function getClusterSummary (): ToRef<TClusterSummary | undefined> {
  const clusterSummary = ref<TClusterSummary>();

  onMounted(async () => {
    clusterSummary.value = await fetchClusterSummary();
  });

  return clusterSummary;
}
