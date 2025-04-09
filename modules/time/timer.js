import * as UI_DOM from '../../config/dom-consts.js'; 
export const gameStartTime = Date.now();
let gameInterval;

// Таймер игры
export function startGameTimer() {
    gameInterval = setInterval(() => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - gameStartTime; //в мс
        const seconds = Math.floor(elapsedTime / 1000);//в сек
        const minutes = Math.floor(seconds / 60);//в мин
        const displaySeconds = seconds % 60;
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        
        UI_DOM.gameTimeElement.textContent = `Время : ${days.toString().padStart(3, '0')}д. ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${displaySeconds.toString().padStart(2, '0')}`;
    }, 1000);
}