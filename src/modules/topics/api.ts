import ApiHttpSingleton from '@/utils/http';
import { TTopic } from './types';

const http = ApiHttpSingleton.getInstance();

export async function fetchTopics (): Promise<TTopic[]> {
  return await http.get<TTopic[]>('/topics');
}

export async function fetchTopic (id: string): Promise<TTopic> {
  return await http.get<TTopic>('/topics/' + id);
}

export async function addTopic (topic: Partial<TTopic>): Promise<TTopic> {
  return await http.post<Partial<TTopic>, TTopic>('/topics/', topic);
}
