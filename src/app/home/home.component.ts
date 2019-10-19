import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { WeatherI } from '../shared/models/weather.model';
import { Store } from '@ngrx/store';
import * as fromRoot from '../shared/reducers/weather.reducer';
// import { AppState } from './../app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // weatherData: Observable<WeatherI>;
  weatherData: Observable<any> = this.store.select('weather');

  constructor(private store: Store<any>) {
    // this.weatherData = store.select('weather');
  }
  ngOnInit() {
    this.store.dispatch({ type: '[Weather Page] Load Weather' });

    // this.apiService.getWeatherByCity('tunis').subscribe((data: WeatherI) => {
    //   console.log(data);
    //   this.apiService.weatherData = data;

    // });
  }

}

// ng add @ngrx/store
