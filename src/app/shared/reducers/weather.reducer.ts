import { Action } from '@ngrx/store'
import * as WeatherActions from './../actions/weather.actions';
import { WeatherI } from '../models/weather.model';


// Section 2
export function reducer(state: WeatherI = {} as WeatherI, action: WeatherActions.Actions) {
  console.log(action.type, state);

  // Section 3
  switch (action.type) {
    case WeatherActions.GET_WEATHER:
      return state;
    case WeatherActions.LOADED_WEATHER:
      return action.payload;
    default:
      return state;
  }
}
