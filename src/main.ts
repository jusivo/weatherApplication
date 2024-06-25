import './style.css'
import {fetchCity} from './Api'
import { saveToLocalStorage, displayUpdate } from './Fetching/SavingLs'
import {pagination, displayUpdates} from './Fetching/Updating'

const appWeather = (): void =>{
  document.getElementById('addBtn')?.addEventListener('click', async () => {
    const searchInput = document.getElementById('searchingInp') as HTMLInputElement;
    if (searchInput.value !== '') {
      try {
        const weatherData = await fetchCity(searchInput.value.trim());
        if (weatherData) {
          saveToLocalStorage(weatherData);
          displayUpdates();
          //displayUpdate(); 
          searchInput.value = '';
        }
      } catch (err) {
        console.error('Error adding weather data:', err);
      }
    }
  });
}
document.addEventListener("DOMContentLoaded", appWeather);
//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
