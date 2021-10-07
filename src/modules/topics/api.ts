import ApiHttpSingleton from '@/utils/http';
import { TTopic } from './types';

export async function fetchTopics (): Promise<TTopic[]> {
  const http = ApiHttpSingleton.getInstance();
  return await http.get<TTopic[]>('/topics');
}

export async function fetchTopic (id: string): Promise<TTopic> {
  const http = ApiHttpSingleton.getInstance();
  return await http.get<TTopic>('/topics/' + id);
}
