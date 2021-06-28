import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.css']
})
export class HourlyComponent implements OnInit {
  @Input() hourly;

  constructor() { }

  ngOnInit(): void {
  }

}
