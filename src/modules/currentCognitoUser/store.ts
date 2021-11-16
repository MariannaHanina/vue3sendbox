import { Module, MutationTree, ActionTree } from 'vuex';
import { TRootState } from '@/store/types';
import { TCurrentUserState, TCurrentUserMutations, TCurrentUserActions } from './types';
import { fetchCurrentUser } from './api';

export const state: TCurrentUserState = {
  user: null,
};

export const mutations: MutationTree<TCurrentUserState> & TCurrentUserMutations = {
  SET_USER (state, payload) {
    state.user = payload;
  },
};

export const actions: ActionTree<TCurrentUserState, TRootState> & TCurrentUserActions = {
  async fetchUser ({ commit }) {
    const user = await fetchCurrentUser();
    commit('SET_USER', user);
  },
};

const currentCognitoUserModule: Module<TCurrentUserState, TRootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default currentCognitoUserModule;
