import { Daily } from "./daily";
import { Hourly } from "./hourly";

export class WeatherData {
    daily: Daily[];
    hourly: Hourly[];

    constructor(obj?: any) {
        this.daily = obj && obj.daily.map(result => new Daily(result)) || [];
        this.hourly = obj && obj.hourly.map(result => new Hourly(result)) || [];
    }
}