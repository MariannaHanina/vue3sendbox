import { TUser } from './types';

const users: TUser[] = [{
  id: '1',
  username: 'Denis Kurov',
}, {
  id: '2',
  username: 'Marianna Khanina',
}];

export default {
  getAll (): Promise<TUser[]> {
    return Promise.resolve(users);
  },
};
