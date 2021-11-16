import { TUser } from './types';

const users: TUser[] = [{
  id: '1',
  username: 'Denis Kurov',
}, {
  id: '2',
  username: 'Marianna Khanina',
}];

export async function fetchUsers (): Promise<TUser[]> {
  return await Promise.resolve(users);
}
