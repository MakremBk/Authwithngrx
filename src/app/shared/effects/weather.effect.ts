import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';

@Injectable()
export class WeatherEffects {

  loadWeather$ = createEffect(() => this.actions$.pipe(
    ofType('[Weather Page] Load Weather'),
    mergeMap(() => this.apiService.getWeather()
      .pipe(
        map(weather => ({ type: '[Weather API] Weather Loaded Success', payload: weather })),
        catchError(() => EMPTY)
      ))
  ));

  loadWeatherByCity$ = createEffect(() => this.actions$.pipe(
    ofType('[Weather API] Weather Get City'),
    mergeMap((city: any) => this.apiService.getWeatherByCity(city.payload)
      .pipe(
        map(weather => ({ type: '[Weather API] Weather Loaded Success', payload: weather })),
        catchError(() => EMPTY)
      ))
  ));


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
