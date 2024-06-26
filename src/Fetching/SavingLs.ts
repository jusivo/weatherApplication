import weather from './Fetching'
export  function saveToLocalStorage(weather: weather): void {
    //store and retrieve data from the browser's localStorage.
    const savedForecasts: weather[] = JSON.parse(localStorage.getItem('weatherForecasts') || '[]');
    savedForecasts.push(weather);
    localStorage.setItem('weatherForecasts', JSON.stringify(savedForecasts));
  }
//function to remove a record:
  export function removeFromLs(ind:number):void{
    const savedForecasts: weather[] = JSON.parse(localStorage.getItem('weatherForecasts') || '[]');
    savedForecasts.splice(ind, 1);
    localStorage.setItem('weatherForecasts', JSON.stringify(savedForecasts));
  }
