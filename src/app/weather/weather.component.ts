import { Component, OnInit } from '@angular/core';
import { Daily } from '../model/daily';
import { Hourly } from '../model/hourly';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  city: string = "Belgrade";
  lat: number;
  lon: number;
  currentWeather;
  dailyForecast: Daily[];
  hourlyForecast: Hourly[];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getCurrentWeather()
  }


  getCurrentWeather() {
    this.weatherService.getCurrentWeather(this.city).subscribe(
      result => {
        this.currentWeather = this.getWeekDay(result)
        console.log("current", result)
        this.lat = result.lat;
        this.lon = result.lon;
        this.getDailyForecast()
        this.getHourlyForecast()
      }
    )
  }

  getDailyForecast() {
    this.weatherService.getAllWeatherData(this.lat, this.lon).subscribe(
      result => {
        this.dailyForecast = result.daily.map(result => this.getWeekDay(result))
        console.log("daily", result)
      }
    )
  }

  getHourlyForecast() {
    this.weatherService.getAllWeatherData(this.lat, this.lon).subscribe(
      result => {
        this.hourlyForecast = result.hourly
        console.log("alweatherdata", result)
      }
    )
  }

  getWeekDay(day) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayNum = new Date(day.dt * 1000).getDay();
    let result = days[dayNum];
    day.weekDay = result;
    return day;
  }

}
