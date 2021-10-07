import ApiHttpSingleton from '@/utils/http';
import { TTopic } from './types';

export async function fetchTopics (http: ApiHttpSingleton): Promise<TTopic[]> {
  return await http.get<TTopic[]>('/topics');
}

export async function fetchTopic (http: ApiHttpSingleton, id: string): Promise<TTopic> {
  return await http.get<TTopic>('/topics/' + id);
}
