export type TPartition = {
    id: string,
    firstOffset: number,
    lastOffset: number,
    size: number,
    leaderNode: string,
    replicaNodes: string,
    syncReplicaNodes: string,
    offlineReplicaNodes: string,
    preferred: boolean,
    underReplicated: boolean,
}
