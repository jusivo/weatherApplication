export function showError(message: string): void{

    const errorMessage = document.getElementById('errorMessage');
    const errorText = document.getElementById('errorText');
    if (errorMessage && errorText) {
      errorText.textContent = message;
      errorMessage.classList.remove('is-hidden');
    }
}
export function showPositive(message: string):void{
    const positiveMessage = document.getElementById('positiveMessage');
    const positiveText = document.getElementById('positiveText');
    if (positiveMessage && positiveText) {
        positiveText.textContent = message;
        positiveMessage.classList.remove('is-hidden');
    }
}