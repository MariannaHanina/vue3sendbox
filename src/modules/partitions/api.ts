import ApiHttpSingleton from '@/utils/http';
import { TPartition } from './types';

export async function fetchPartitions (id:string): Promise<TPartition[]> {
  const http = ApiHttpSingleton.getInstance();
  return await http.get<TPartition[]>('/partitions?topic=' + id);
}
