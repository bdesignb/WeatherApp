export class Daily {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: Object;
    humidity: number;
    pop: number;
    pressure: number;
    rain: number;
    snow: number;
    sunrise: number;
    sunset: number;
    temp: Object;
    uvi: number;
    weather: [];
    weekDay: string;
    wind_deg: number;
    wind_speed: number;

    constructor(obj?: any) {        
        this.clouds = obj && obj.clouds || null;
        this.dew_point = obj && obj.dew_point || null;
        this.dt = obj && obj.dt || null;
        this.feels_like = obj && obj.feels_like || Object;
        this.humidity = obj && obj.humidity || null;
        this.pop = obj && obj.pop || null;
        this.pressure = obj && obj.pressure || null;
        this.rain = obj && obj.rain || null;
        this.snow = obj && obj.snow || null;
        this.sunrise = obj && obj.sunrise || null;
        this.sunset = obj && obj.sunset || null;
        this.temp = obj && obj.temp || null;
        this.uvi = obj && obj.uvi || null;
        this.weather = obj && obj.weather || [];
        this.weekDay = obj && obj.weekDay || "";
        this.wind_deg = obj && obj.wind_deg || null;
        this.wind_speed = obj && obj.wind_speed || null; 
     }
    
}

