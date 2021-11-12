import { TClusterSummary } from '../types';
import { ref, onMounted, ToRef } from 'vue';
import { fetchClusters } from '../api';

export default function getClusters (): ToRef<TClusterSummary[] | undefined> {
  const clusters = ref<TClusterSummary[]>();

  onMounted(async () => {
    clusters.value = await fetchClusters();
  });

  return clusters;
}
