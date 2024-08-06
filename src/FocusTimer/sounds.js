export const buttonPressAudio = new Audio('./assets/button-press.wav')
export const kitchenTimer = new Audio('./assets/kitchen-timer.mp3')
export const bgAudio = new Audio('./assets/bg-audio.mp3')
export const coffee = new Audio('./assets/coffee.wav')
export const fireplace = new Audio('./assets/fireplace.wav')
export const forest = new Audio('./assets/forest.wav')
export const rain = new Audio('./assets/rain.wav')


bgAudio.loop = true
coffee.loop = true
fireplace.loop = true
forest.loop = true
rain.loop = true

document.addEventListener('DOMContentLoaded', () => {
    const forestButton = document.querySelector('[data-action="toggleForestSound"]');
    const rainButton = document.querySelector('[data-action="toggleRainSound"]');
    const coffeeButton = document.querySelector('[data-action="toggleCoffeeSound"]');
    const fireButton = document.querySelector('[data-action="toggleFireSound"]');
    

    forestButton.addEventListener('click', () => toggleSound(forest, forestButton));
    rainButton.addEventListener('click', () => toggleSound(rain, rainButton));
    coffeeButton.addEventListener('click', () => toggleSound(coffee, coffeeButton));
    fireButton.addEventListener('click', () => toggleSound(fireplace, fireButton))
    
    function toggleSound(audio, button) {
        if (audio.paused) {
            audio.play();
            button.classList.add('active');
        } else {
            audio.pause();
            button.classList.remove('active');
        }
    }
});