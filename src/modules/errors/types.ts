import { ActionContext } from 'vuex';
import { TRootState } from '@/store/types';
// Store types

export type TErrorsState = {
  errors: Error[],
};

export type TErrorsMutations = {
  ADD_ERROR(state: TErrorsState, error: Error): void;
};

export type TErrorsActions = {
  addError({ commit }: ActionContext<TErrorsState, TRootState>, error: Error): void;
}
