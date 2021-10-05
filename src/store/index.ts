import { createStore, Module } from 'vuex'
import { TRootState } from './types';

const store = createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});

export default store;

export function registerModule<T> (name: string, module: Module<T, TRootState>): void {
  if (!store.hasModule(name)) {
    store.registerModule(name, module);
  }
}
