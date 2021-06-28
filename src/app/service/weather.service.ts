
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WeatherData } from '../model/weatherData';
import { Current } from '../model/current';


const url = "http://api.openweathermap.org/data/2.5/";
let apiKey = '47a523b26dcf32cd10e37e1ed7508d5a';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  constructor(private http: HttpClient) { }

  getCurrentWeather(city: string): Observable<Current> {
    return this.http.get(url + 'weather?q=' + city + '&units=metric' + '&appid=' + apiKey).pipe(map(
      response => {
        return new Current(response)
      }
    ))
  }

  getAllWeatherData(lat, lon): Observable<WeatherData> {
    return this.http.get(url + 'onecall' + '?lat=' + lat + '&lon=' + lon + '&units=metric' + '&exclude=' + '&appid=' + apiKey).pipe(map(
      response => {
        return new WeatherData(response)
      }
    ))
  }

}
