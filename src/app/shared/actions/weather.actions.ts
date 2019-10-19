import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { WeatherI } from '../models/weather.model';

export const GET_WEATHER = '[WEATHER] Get';
export const LOADED_WEATHER = '[Weather API] Weather Loaded Success';
export const GETBYCITY = '[Weather API] Weather Get City';


export class GetWeather implements Action {
  readonly type = GET_WEATHER;
  constructor(public payload: string) { }
}
export class LoadWeather implements Action {
  readonly type = LOADED_WEATHER;
  constructor(public payload: WeatherI) { }
}
export class GetWeatherByCity implements Action {
  readonly type = GETBYCITY;
  constructor(public payload: string) { }
}


export type Actions = GetWeather | LoadWeather;
