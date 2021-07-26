import { createSelector, MemoizedSelector} from '@ngrx/store';


export const selectAuthState = state => state.auth

export const selectIsLoggedInSelector: MemoizedSelector<object, boolean> = createSelector(
    selectAuthState,
    state => state.isLoggedIn
);

export const selectIsLoggedOutSelector: MemoizedSelector<object, boolean> = createSelector(
    selectAuthState,
    state => !state.isLoggedIn
);
