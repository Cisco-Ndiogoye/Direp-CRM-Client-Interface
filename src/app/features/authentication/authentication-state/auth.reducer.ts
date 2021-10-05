import { AuthActions, AuthActionTypes } from './auth.actions';
import { AuthState } from "./auth.state";
import { AuthStateMutators } from './authState.mutator'

const initialState: AuthState = {
  isLoggedIn: false,
  token: '',
}

export function authReducer(state: AuthState = initialState, action: AuthActions): AuthState {
  switch (action.type) {

      case AuthActionTypes.Login:
          return AuthStateMutators.login(state, action.token)

      case AuthActionTypes.Logout:
          return AuthStateMutators.logout(state)

      default:
          return state;
  }
}
