export class Current {
    clouds: Object;
    lat: number;
    lon: number;   
    dt: number;
    main: Object;
    name: string;
    sys: Object;
    timezone: number;
    visibility: number;
    weather: [];
    weekDay: string;
    wind: Object;   

    constructor(obj?: any) {        
        this.clouds = obj && obj.clouds || Object;
        this.lat = obj && obj.coord.lat || null;
        this.lon = obj && obj.coord.lon || null;      
        this.dt = obj && obj.dt || null;
        this.main = obj && obj.main || Object;
        this.name = obj && obj.name || "";
        this.sys = obj && obj.sys || Object;
        this.timezone = obj && obj.timezone || null;
        this.visibility = obj && obj.visibility || null;
        this.weather = obj && obj.weather || [];
        this.weekDay = obj && obj.weekDay || "";
        this.wind = obj && obj.wind || null;      
     }
    
}

