import axios from 'axios';
import Fetching from './Fetching/Fetching'
//saving in local storage functions:
import { saveToLocalStorage, displayUpdate } from './Fetching/SavingLs'

//export interface 
const API_KEY = 'adcb2bb2bef9b326ff3cd7ff9c496abf';
//const API_KEY =import.meta.env.WEATHER_API;

const BASE_URL = 'http://api.openweathermap.org/data/2.5';

//creating fetch function to 

export const fetchCity = async (name: string): Promise<Fetching> => {
  try {
    let response;
    /*let response = await axios.get(
      `${BASE_URL}/weather?q=${name}&appid=${API_KEY}`,
    );
    */

    if (!isNaN(Number(name))) {
      // Query is a ZIP code
      response = await axios.get(`${BASE_URL}/weather?zip=${name}&appid=${API_KEY}&units=metric`);
    }
     else if (name.includes(',')) {
      //if coordinates
      const [lat, lon] = name.split(',');
      response = await axios.get(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    } 
    else{
      response = await axios.get(
        `${BASE_URL}/weather?q=${name}&appid=${API_KEY}`,
      );
    }

    const data: Fetching = {
      id: response.data.id,
      name: response.data.name,
      country: response.data.sys.country,
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      icon: response.data.weather[0].icon,
      sunrise: response.data.sys.sunrise,
    sunset: response.data.sys.sunset,
    };
    return data;
  } catch (error) {
    console.error('Error fetching city data:', error);
    throw new Error('Failed to fetch city data');
  }
};

