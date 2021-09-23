import { users } from './mockData';
import { mutations, actions } from '@/modules/users/store';

jest.mock('@/modules/users/api.ts', () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const usersData = require('./mockData');

  return {
    getAll: jest.fn().mockResolvedValue(usersData.users),
  }
});

describe('Users module -> store module', () => {
  describe('mutations', () => {
    const { SET_USERS } = mutations;

    test('SET_USERS mutation', () => {
      const state = {
        users: [],
      };

      SET_USERS(state, users);

      expect(state.users).toBe(users);
    });
  });

  describe('actions', () => {
    const { fetchUsers } = actions;

    describe('fetchUsers action', () => {
      let commit: () => void;

      beforeEach(async () => {
        commit = jest.fn();
        await fetchUsers({ commit } as any);
      });

      test('mutation method has been called', () => {
        expect(commit).toHaveBeenCalledTimes(1);
      });

      test('mutation method has been called with params', () => {
        expect(commit).toHaveBeenCalledWith('SET_USERS', users);
      });
    })
  });
});
