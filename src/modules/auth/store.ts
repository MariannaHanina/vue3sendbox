import { Module, MutationTree, ActionTree, GetterTree } from 'vuex';
import authApi from './api';
import ApiHttpSingleton from '@/utils/http';
import { codeErrorHandler } from '@/modules/errors/utils';
import { TRootState } from '@/store/types';
import { setToken, getToken, deleteToken } from './utils';
import {
  TCredentials,
  TAuthState,
  TAuthMutations,
  TAuthActions,
  TAuthGetters,
} from './types';

const apiHttp = ApiHttpSingleton.getInstance();

const state: TAuthState = {
  token: getToken() || '',
  status: '',
};

const mutations: MutationTree<TAuthState> & TAuthMutations = {
  AUTH_REQUEST (state) {
    state.status = 'loading';
  },
  AUTH_SUCCESS (state, token) {
    state.status = 'success';
    state.token = token;
  },
  AUTH_ERROR (state) {
    state.status = 'error';
  },
  AUTH_LOGOUT (state) {
    state.token = '';
  },
};

const actions: ActionTree<TAuthState, TRootState> & TAuthActions = {
  async authRequest ({ commit }, credentials: TCredentials): Promise<void> {
    commit('AUTH_REQUEST');
    try {
      const { token } = await authApi.login(credentials);
      setToken(token);
      commit('AUTH_SUCCESS', token);
      apiHttp.manager.setAuthorizationHeader(token);
    } catch (e) {
      commit('AUTH_ERROR');
      codeErrorHandler(e as Error);
      throw e;
    }
  },
  authLogout ({ commit }) {
    commit('AUTH_LOGOUT');
    deleteToken();
    apiHttp.manager.deleteAuthorizationHeader();
  },
};

const getters: GetterTree<TAuthState, TRootState> & TAuthGetters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
};

export const authModule: Module<TAuthState, TRootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default authModule;
