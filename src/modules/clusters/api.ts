// import ApiHttpSingleton from '@/utils/http';
import { TClusterSummary } from './types';

// const http = ApiHttpSingleton.getInstance();

export async function fetchClusters (): Promise<TClusterSummary[]> {
  // return await http.get<TClusterSummary[]>('/clusters');
  return await Promise.resolve([
    {
      name: 'jarvis-nonprod-us-east-1-integration',
      topicCount: 502,
      partitionCount: 1907,
      preferredReplicaPercent: 100,
      underReplicatedCount: 0,
    }, {
      name: 'jarvis-nonprod-us-east-1-test1',
      topicCount: 344,
      partitionCount: 567,
      preferredReplicaPercent: 60,
      underReplicatedCount: 0,
    },
  ]);
}

export async function fetchClusterSummary (): Promise<TClusterSummary> {
  // return await http.get<TClusterSummary>('/cluster');
  return await Promise.resolve({
    name: 'localhost:9092',
    topicCount: 3,
    partitionCount: 77,
    preferredReplicaPercent: 65,
    underReplicatedCount: 0.5,
  });
}
