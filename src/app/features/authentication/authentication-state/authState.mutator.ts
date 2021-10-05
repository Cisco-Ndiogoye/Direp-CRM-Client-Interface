import {AuthState} from './auth.state';

export abstract class AuthStateMutators {

    static login(state: AuthState, token: string): AuthState {
        return {
            ...state,
            isLoggedIn: true,
            token: token,
        };
    }

    static logout(state: AuthState): AuthState {
        return {
            ...state,
            isLoggedIn: false,
            token: '',
        };
    }
}
