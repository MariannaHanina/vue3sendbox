import ApiHttpSingleton from '@/utils/http';
import { TBroker } from './types';

export async function fetchBrokers (http: ApiHttpSingleton): Promise<TBroker[]> {
  return await http.get<TBroker[]>('/brokers');
}
