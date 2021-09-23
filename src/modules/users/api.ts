import { TUser } from './types';

const users: TUser[] = [{
  id: '1',
  name: 'Denis',
  surname: 'Kurov',
}, {
  id: '2',
  name: 'Marianna',
  surname: 'Khanina',
}];

export default {
  getAll (): Promise<TUser[]> {
    return Promise.resolve(users);
  },
}
