import { TBroker } from '@/modules/brokers/types';

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
