import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  weatherData;
  userData;
  constructor(private httpClient: HttpClient) { }


  getWeather() {
    console.log('get weather');

    return this.httpClient.get('https://api.openweathermap.org/data/2.5/forecast/daily?q=tunis,tn&appid=6a5af167ef697a9abb4a775e5684d9c5&units=metric');
  }
  getWeatherByCity(city = '') {
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + '&appid=6a5af167ef697a9abb4a775e5684d9c5&units=metric');
  }


  getUser(loginBody){
    return this.httpClient.post('http://40.114.252.223:5400/users/login',loginBody);
  }
}
