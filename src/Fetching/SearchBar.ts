import { displayUpdates } from './Updating';
export function searchResults():void{
    const searchItems = document.getElementById('searchItems') as HTMLInputElement;
    searchItems.addEventListener('input', () => {
        const searchTerm = searchItems.value.toLowerCase().trim();
        displayUpdates(1, searchTerm);
      });}