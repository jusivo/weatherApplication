//10 recs per page
import weather from './Fetching'
import {removeFromLs} from './SavingLs'
const per_Page = 10;
//will change its value and thats why let
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


        //add buttons if there are more records than 10, and have to be previous page:
        const btnprev = document.createElement('button');
        btnprev.innerText = 'Previous';
        if(currentPage ==1){
          btnprev.disabled = true;  

        }

        else{
          btnprev.addEventListener('click', () => {
            if(currentPage > 1){
              currentPage--;
              displayUpdates(currentPage);  

            }

          });
          paginationControls.insertBefore(btnprev, paginationControls.firstChild );

        }
        const next_btn = document.createElement('button');
        next_btn.innerText = 'Next';
        if(currentPage == totalPages){
          next_btn.disabled = true;
        }
        else{
          next_btn.addEventListener('click', () => {  
            if(currentPage < totalPages){
              currentPage++;
              displayUpdates(currentPage);
            }


          });
          paginationControls.appendChild(next_btn); 
        }

      }
}

export  function displayUpdates(page = 1, searchTerm?: string): void{
    const weatherList: weather[] = JSON.parse(localStorage.getItem('weatherForecasts') || '[]');
    const tableBody = document.getElementById('tableBody');
    if (tableBody) {
      let filtered = weatherList;
      //seearching in main page :
      if(searchTerm){
        filtered = weatherList.filter(weather=> 
          weather.name.toLowerCase().includes(searchTerm!)|| weather.
          country.toLowerCase()
          .includes(searchTerm)|| weather.zip.toString().includes(searchTerm)
           || `${weather.lat},${weather.lon}`.includes(searchTerm))

      }

        const starting = (Number(page)-1) * Number(per_Page);
        const ending = starting + Number(per_Page);
        const paginated = filtered.slice(starting, ending);
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
            <td><button class="button is-danger is-dark" data-filtered-index="${index}">Remove</button></td>
          </tr>
        `).join('');

        //remove button fuctionality:
        document.querySelectorAll('.button.is-danger.is-dark').forEach(btn=>{
          btn.addEventListener('click', (Event)=>{
            const target = Event.target as HTMLButtonElement;
            const filter = parseInt(target.dataset.filteredIndex!, 10);
            const index = weatherList.indexOf(filtered[filter]);
            removeFromLs(index);
            displayUpdates(currentPage, searchTerm);
            
          })
        })

        
        pagination(filtered.length);

      }
  }
