import { Module, MutationTree, ActionTree } from 'vuex';
import { TRootState } from '@/store/types';
import { TUsersState, TUsersMutations, TUsersActions } from './types';
import { fetchUsers } from './api';

export const state: TUsersState = {
  users: [],
};

export const mutations: MutationTree<TUsersState> & TUsersMutations = {
  SET_USERS (state, payload) {
    state.users = payload;
  },
};

export const actions: ActionTree<TUsersState, TRootState> & TUsersActions = {
  async fetchUsers ({ commit }) {
    const users = await fetchUsers();
    commit('SET_USERS', users);
  },
};

const usersModule: Module<TUsersState, TRootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default usersModule;
