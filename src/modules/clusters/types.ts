export type TClusterSummary = {
  id?: string,
  name: string,
  topicCount: number,
  partitionCount: number,
  preferredReplicaPercent: number,
  underReplicatedCount: number,
};
