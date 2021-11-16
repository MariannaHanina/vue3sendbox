import { ActionContext } from 'vuex';
import { TRootState } from '@/store/types';

export type TCurrentUser = {
  id: string;
  username: string;
  role: string;
};

// Store types
export type TCurrentUserState = {
  user: TCurrentUser | null;
}

export type TCurrentUserMutations<S = TCurrentUserState> = {
  SET_USER(state: S, payload: TCurrentUser): void;
}

export type TCurrentUserActions = {
  fetchUser(
    { commit }: ActionContext<TCurrentUserState, TRootState>,
  ): void;
}
