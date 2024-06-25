import weather from './Fetching'

export  function saveToLocalStorage(weather: weather): void {
    //store and retrieve data from the browser's localStorage.
    const savedForecasts: weather[] = JSON.parse(localStorage.getItem('weatherForecasts') || '[]');
    savedForecasts.push(weather);
    localStorage.setItem('weatherForecasts', JSON.stringify(savedForecasts));
  }

  export  function displayUpdate(): void{
    const weatherList: weather[] = JSON.parse(localStorage.getItem('weatherForecasts') || '[]');
    const tableBody = document.getElementById('tableBody');
    if (tableBody) {
        tableBody.innerHTML = weatherList.map((weather, index) => `
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
      }
  }
  document.addEventListener('DOMContentLoaded', displayUpdate);