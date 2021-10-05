import { Account } from '../../../core/classes/account';
import { UserState } from './user.state';


export abstract class UserStateMutators {

  static load(state: UserState, account: Account): UserState {
      return {
          ...state,
          account: account,
      };
  }

  static empty(state: UserState): UserState {
      return {
          ...state,
          account: null,
      };
  }
}
