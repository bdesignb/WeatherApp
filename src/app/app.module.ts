import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DailyComponent } from './weather/daily/daily.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HourlyComponent } from './weather/hourly/hourly.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    NavBarComponent,
    DailyComponent,
    HourlyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
