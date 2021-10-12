import { TAcl } from './types';
import ApiHttpSingleton from '@/utils/http';

const apiHttp = ApiHttpSingleton.getInstance();

export async function fetchACLs (): Promise<TAcl[]> {
  return await apiHttp.get('/acls');
}
