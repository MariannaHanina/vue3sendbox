import { ActionContext } from 'vuex';
import { TRootState } from '@/store/types';

type TToken = string;

export type TCredentials = {
  name: string,
  password: string,
};

export type TUserTokenRoles = {
  name: string,
  token: TToken,
  roles: string[],
};

// Store types
export type TAuthState = {
  token: TToken;
  status: string;
}

export type TAuthMutations = {
  AUTH_REQUEST(state: TAuthState): void;
  AUTH_SUCCESS(state: TAuthState, token: TToken): void;
  AUTH_ERROR(state: TAuthState): void;
}

export type TAuthActions = {
  authRequest(
    { commit }: ActionContext<TAuthState, TRootState>,
    credentials: TCredentials,
  ): Promise<void>;
}

export type TAuthGetters = {
  isAuthenticated(state:TAuthState): boolean;
  authStatus(state: TAuthState): string;
}
