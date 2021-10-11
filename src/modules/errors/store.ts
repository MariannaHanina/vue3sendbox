import { MutationTree, ActionTree, Module, GetterTree } from 'vuex';
import { TRootState } from '@/store/types';
import {
  TError,
  TErrorsState,
  TErrorsMutations,
  TErrorsActions,
  TErrorsGetters,
} from './types';

const state: TErrorsState = {
  errors: [],
};

const mutations: MutationTree<TErrorsState> & TErrorsMutations = {
  ADD_ERROR (state, error) {
    state.errors.push(error);
  },
  CLEAR_ERRORS (state) {
    state.errors = [];
  },
};

const actions: ActionTree<TErrorsState, TRootState> & TErrorsActions = {
  addError ({ commit }, error: TError) {
    error.id = Date.now().toString();
    error.date = new Date();
    commit('ADD_ERROR', error);
  },
  clearErrors ({ commit }) {
    commit('CLEAR_ERRORS');
  },
};

const getters: GetterTree<TErrorsState, TRootState> & TErrorsGetters = {
  sortedByDate: (state): TError[] => state.errors.sort((error1, error2) => {
    const time1 = error1.date?.getTime() || 0;
    const time2 = error2.date?.getTime() || 0;
    return time2 - time1;
  }),
};

const errorsModule: Module<TErrorsState, TRootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default errorsModule;
