export type TTopic = {
    id: string,
    name: string,
    partitions: number,
    preferred: number,
    replicated: number,
    config: boolean,
    size: number,
    messages: number
}
