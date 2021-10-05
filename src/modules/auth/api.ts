import { TCredentials, TUserTokenRoles } from './types';

export default {
  login (credentials: TCredentials): Promise<TUserTokenRoles> {
    return Promise.resolve({
      name: credentials.name,
      token: '1234567890',
      roles: ['admin', 'user'],
    });
  },
};
