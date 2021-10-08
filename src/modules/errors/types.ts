import { ActionContext } from 'vuex';
import { TRootState } from '@/store/types';

export type TErrorType = 'http' | 'component' | 'code' | 'warning';

export type TError = {
  id?: string,
  type: TErrorType,
  details: string,
  date?: Date,
};

// Store types
export type TErrorsState = {
  errors: TError[],
};

export type TErrorsMutations = {
  ADD_ERROR(state: TErrorsState, error: TError): void;
  CLEAR_ERRORS(state: TErrorsState): void;
};

export type TErrorsActions = {
  addError({ commit }: ActionContext<TErrorsState, TRootState>, error: TError): void;
  clearErrors({ commit }: ActionContext<TErrorsState, TRootState>): void;
}

export type TErrorsGetters = {
  sortedByDate(state: TErrorsState): TError[];
}
