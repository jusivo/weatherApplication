import axios from 'axios';
import Fetching from './Fetching/Fetching'
import {showError, showPositive} from './MessageHandle'
//const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const API_KEY = 'YOUR_API_KEY';
const BASE_URL = 'http://api.openweathermap.org/data/2.5';

//fetch data function:
export const fetchCity = async (name: string): Promise<Fetching> => {
  try {

    let response;
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
        `${BASE_URL}/weather?q=${name}&appid=${API_KEY}&units=metric`,
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
       zip: name,
       lat: response.data.coord.lat,
       lon: response.data.coord.lon
       
    };
    showPositive('Added succesfully');
    return data;
  } catch (error) {

    console.error('Error fetching city data:', error);
    showError('No such city. Please enter correctly');
    throw new Error('Failed to fetch city data');
  }
};

