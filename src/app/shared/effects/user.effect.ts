import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';
import { Action } from '@ngrx/store';

@Injectable()
export class UserEffects {

  loginUser$ = createEffect(() => this.actions$.pipe(
    ofType('[User] LOGIN'),
    mergeMap((action:any) => this.apiService.getUser(action.payload)
      .pipe(
        map(user => ({ type: '[User] LOGINDONE', payload: user })),
        catchError(() => EMPTY)
      ))
  ));


  constructor(
    private actions$: Actions,
    private apiService: ApiService
  ) { }
}
