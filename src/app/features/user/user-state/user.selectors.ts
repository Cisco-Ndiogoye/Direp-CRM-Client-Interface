import { UserState } from './user.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';


const selectUserState = createFeatureSelector<UserState>('user');

export const selectAccountSelector = createSelector(
  selectUserState,
  (state: UserState) => state.account
)
