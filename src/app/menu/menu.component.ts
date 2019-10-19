import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Store } from '@ngrx/store';
import { WeatherI } from '../shared/models/weather.model';
import * as WeatherAction from '../shared/actions/weather.actions';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private store: Store<WeatherI>) { }

  ngOnInit() { }

  getWeatherByCity(city) {
    this.store.dispatch(new WeatherAction.GetWeatherByCity(city));
  }
}
