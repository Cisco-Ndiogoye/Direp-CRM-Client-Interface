import { AuthActions, AuthActionTypes } from './auth.actions';
import { AuthState } from "./auth.state";

const initialState: AuthState = {
  isLoggedIn: false,
  token: '',
};

export function authReducer(state: AuthState = initialState, action: AuthActions): AuthState {
  switch (action.type) {

      case AuthActionTypes.LoginAction:
          return {
            isLoggedIn: true,
            token: action.token,
          };

      case AuthActionTypes.LogoutAction:
          return {
            isLoggedIn: false,
            token: '',
          };

      default:
          return state;
  }
}
