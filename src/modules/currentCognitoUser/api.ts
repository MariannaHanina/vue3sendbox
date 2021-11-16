import { TCurrentUser } from './types';

const user: TCurrentUser = {
  id: 'user1',
  username: 'Peter Petro',
  role: 'bbgadministrators',
};

export async function fetchCurrentUser (): Promise<TCurrentUser> {
  return await Promise.resolve(user);
}
