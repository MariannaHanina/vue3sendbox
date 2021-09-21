import store from '@/store/index';

const users = {
  state: () => ({
    users: [{
      id: '1',
      name: 'Denis',
      surname: 'Kurov',
    }, {
      id: '2',
      name: 'Marianna',
      surname: 'Khanina',
    }],
  }),
};

if (!store.hasModule('users')) {
  store.registerModule('users', users);
}
