import './style.css'
import {fetchCity} from './Api'
import { saveToLocalStorage } from './Fetching/SavingLs'
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


  //closing and opening modal window:
  function closeModal() {
    const modal = document.getElementById('addForecastModal');
    if(modal){
      modal.classList.remove('is-active');
    }
  }
  document.getElementById('showModal')?.addEventListener('click', () => {
    const modal = document.getElementById('addForecastModal');
    if (modal) {
        modal.classList.add('is-active');
    }
});

document.querySelector('.modal-close')?.addEventListener('click', () => {
  closeModal();
});

document.querySelector('.modal-background')?.addEventListener('click', () => {
  closeModal();
});

}
document.addEventListener("DOMContentLoaded", ()=>{

  appWeather();
  displayUpdates();
});
//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
