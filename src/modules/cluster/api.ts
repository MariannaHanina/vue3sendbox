// import ApiHttpSingleton from '@/utils/http';
import { TClusterSummary } from './types';

// const http = ApiHttpSingleton.getInstance();

export async function fetchClusterSummary (): Promise<TClusterSummary> {
  // return await http.get<TClusterSummary>('/cluster');
  return await Promise.resolve({
    topicCount: 3,
    partitionCount: 77,
    preferredReplicaPercent: 65,
    underReplicatedCount: 0.5,
  });
}
