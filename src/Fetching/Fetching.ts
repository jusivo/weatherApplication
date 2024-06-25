export default interface WeatherData {
    id: number,
    name: string,
    country: string,
    temp: number,
    wind: number,
    humidity: number,
    pressure: number,
    sunrise: number,
    sunset: number,
    icon:string,
    city_user?:boolean
}