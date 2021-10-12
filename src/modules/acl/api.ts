import { TAcl } from './types';
import ApiHttpSingleton from '@/utils/http';

const apiHttp = ApiHttpSingleton.getInstance();

export async function fetchACLs (): Promise<TAcl[]> {
  return await apiHttp.get('/acls');
  // const acls: TAcl[] = [{
  //   id: 'id1',
  //   name: 'Name1',
  //   principal: 'principal1',
  //   resourceType: 'resourceType1',
  //   patternType: 'patternType1',
  //   operation: 'operation1',
  //   host: 'host1',
  //   permissionType: 'permissionType1',
  // }];

  // return Promise.resolve(acls);
}
