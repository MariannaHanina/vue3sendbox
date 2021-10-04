import { TBroker, TUser } from '@/modules/overview/types';

export const brokers: TBroker[] = [{
  id: 1,
  host: 'test_localhost',
  port: '8080',
  rack: '',
  controller: 'yes',
  partitions: '87',
},
{
  id: 2,
  host: 'test_google',
  port: '8080',
  rack: '',
  controller: 'no',
  partitions: '60',
}];

export const users: TUser[] = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      city: 'Gwenborough',
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      city: 'Wisokyburgh',
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
    },
  },
]
