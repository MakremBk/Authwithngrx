import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { UserAuth } from '../models/userauth .module';

export const GET_User= '[User] LOGIN';
export const LOGINDONE= '[User] LOGINDONE';
export const Register_User = '[UserAPI] Userer Register Success';


export class GetUser implements Action {
  readonly type = GET_User;
  constructor(public payload: {email:string,password: string}) { }
}
export class RegisterUser implements Action {
  readonly type = Register_User;
  constructor(public payload: UserAuth) { }
}
export class loginUser implements Action {
  readonly type = LOGINDONE;
  constructor(public payload: UserAuth) { }
}



export type Actions = GetUser | RegisterUser | loginUser;
