import { ActionContext } from 'vuex';
import { TRootState } from '@/store/types';

export type TUser = {
  id: string;
  username: string;
}

// Store types
export type TUsersState = {
  users: TUser[];
}

export type TUsersMutations<S = TUsersState> = {
  SET_USERS(state: S, payload: TUser[]): void;
}

export type TUsersActions = {
  fetchUsers(
    { commit }: ActionContext<TUsersState, TRootState>,
  ): void;
}
