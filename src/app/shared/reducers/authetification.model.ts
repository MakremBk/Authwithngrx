import { Action } from '@ngrx/store'
import * as UserActions from '../actions/user.action';
import { UserAuth } from '../models/userauth .module';


// Section 2
export function reducer(state: UserAuth  = {} as UserAuth , action: UserActions.Actions) {
  console.log(action.type, state);

  // Section 3
  switch (action.type) {
    case UserActions.GET_User:
      return action.payload;
    case UserActions.LOGINDONE:
      return action.payload;
    default:
      return state;
  }
}
