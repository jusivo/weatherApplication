//10 irasu per viena puslapi:
import weather from './Fetching'

const per_Page = 10;
let currentPage = 1;

export function pagination(recs:number):void{
    const paginationControls = document.getElementById('paginationControls');
    if (paginationControls) {
        const totalPages = Math.ceil(recs /Number(per_Page));
        paginationControls.innerHTML = '';
    
        for (let i = 1; i <= totalPages; i++) {
          const button = document.createElement('button');
          button.innerText = i.toString();
          button.addEventListener('click', () => displayUpdates(i));
          paginationControls.appendChild(button);
        }
      }
}

export  function displayUpdates(page = 1): void{
    const weatherList: weather[] = JSON.parse(localStorage.getItem('weatherForecasts') || '[]');
    const tableBody = document.getElementById('tableBody');
    if (tableBody) {

        const starting = (Number(currentPage)-1) * Number(per_Page);
        const ending = starting + Number(per_Page);
        const paginated = weatherList.slice(starting, ending);
        tableBody.innerHTML = paginated.map((weather, index) => `
          <tr>
            <td>${index + 1}</td>
            <td>${weather.name}, ${weather.country}</td>
            <td>${weather.temp}°C</td>
            <td>${weather.wind} m/s</td>
            <td>${weather.humidity}%</td>
            <td>${weather.pressure} hPa</td>
            <td>${new Date(weather.sunrise * 1000).toLocaleTimeString()}</td>
            <td>${new Date(weather.sunset * 1000).toLocaleTimeString()}</td>
            <td><img src="http://openweathermap.org/img/w/${weather.icon}.png" alt="Weather Icon"></td>
          </tr>
        `).join('');
        
        pagination(weatherList.length);

      }
  }
