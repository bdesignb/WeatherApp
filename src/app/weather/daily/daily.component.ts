import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { WeatherService } from 'src/app/service/weather.service';
import { HourlyComponent } from '../hourly/hourly.component';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})


export class DailyComponent implements OnInit {
  @Input() dailyForecast;
  @Input() hourlyForecast;
  hourly: Object[] = [];
  pipe = new DatePipe('en-US');

  constructor(private weatherService: WeatherService, private modalService: NgbModal) { }

  ngOnInit(): void {}

  open(day) {
    const modalRef = this.modalService.open(HourlyComponent);
    this.hourly = []

    for (let i = 0; i < this.hourlyForecast.length; i++) {
      if ((this.pipe.transform((day * 1000))) == (this.pipe.transform((this.hourlyForecast[i].dt * 1000)))) {
        this.hourly.push(this.hourlyForecast[i])
      }
    }
    modalRef.componentInstance.hourly = this.hourly
  }

}

