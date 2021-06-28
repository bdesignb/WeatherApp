export class Hourly {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: number;
    humidity: number;
    pop: number;
    pressure: number;
    rain: Object;
    snow: Object;    
    temp: Object;
    uvi: number;
    visibility: number;
    weather: [];   
    wind_deg: number;
    wind_gust: number;
    wind_speed: number;

    constructor(obj?: any) {
        this.clouds = obj && obj.clouds || null;
        this.dew_point = obj && obj.dew_point || null;
        this.dt = obj && obj.dt || null;
        this.feels_like = obj && obj.feels_like || Object;
        this.humidity = obj && obj.humidity || null;
        this.pop = obj && obj.pop || null;
        this.pressure = obj && obj.pressure || null;
        this.rain = obj && obj.rain || Object;
        this.snow = obj && obj.snow || Object;      
        this.temp = obj && obj.temp || null;
        this.uvi = obj && obj.uvi || null;
        this.visibility = obj && obj.visibility || null;
        this.weather = obj && obj.weather || [];      
        this.wind_deg = obj && obj.wind_deg || null;
        this.wind_gust = obj && obj.wind_gust || null;
        this.wind_speed = obj && obj.wind_speed || null; 
     }
    
}

