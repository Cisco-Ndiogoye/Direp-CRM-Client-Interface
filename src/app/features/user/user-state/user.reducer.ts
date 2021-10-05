import { UserState } from './user.state';
import { UserActionTypes, UserActions } from './user.actions';
import { UserStateMutators } from './userState.mutator'
import { Account } from '../../../core/classes/account';


const initialState: UserState = {
  account : new Account()
};

export function userReducer(state: UserState = initialState, action: UserActions): UserState {
  switch (action.type) {

    case UserActionTypes.successfulUserLoadingAction:
      return UserStateMutators.load(state, action.account)

    case UserActionTypes.failureUserLoading:
        return UserStateMutators.empty(state)

    default:
        return state;
  }
}

