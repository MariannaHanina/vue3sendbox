import { MutationTree, ActionTree, Module } from 'vuex';
import { TRootState } from '@/store/types';
import { TErrorsState, TErrorsMutations, TErrorsActions } from './types';

const state: TErrorsState = {
  errors: [],
};

const mutations: MutationTree<TErrorsState> & TErrorsMutations = {
  ADD_ERROR (state, error) {
    state.errors.push(error);
  },
};

const actions: ActionTree<TErrorsState, TRootState> & TErrorsActions = {
  addError ({ commit }, error: Error) {
    commit('ADD_ERROR', error);
  },
}

const errorsModule: Module<TErrorsState, TRootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default errorsModule;
