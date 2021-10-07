import ApiHttpSingleton from '@/utils/http';
import { TBroker } from './types';

export async function fetchBrokers (): Promise<TBroker[]> {
  const http = ApiHttpSingleton.getInstance();
  return await http.get<TBroker[]>('/brokers');
}
