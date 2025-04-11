import * as UI_DOM from '../../config/dom-consts.js'; 
import player from '../player/player.js'
import * as ui  from './updaters.js'

export default function initAllUIListeners() {
    // Обработчики кнопок
    // document.getElementById('increaseHP').addEventListener('click', () => {
    //     player.stats.hp = Math.min(player.stats.hp + 10, player.const_stats.MAX_HP);
    //     ui.updateAllBars();
    //     ui.addEventToLog('HP увеличены на 10');
    // });

    // document.getElementById('decreaseHP').addEventListener('click', () => {
    //     player.stats.hp = Math.max(player.stats.hp - 10, 0);
    //     ui.updateAllBars();
    //     ui.addEventToLog('HP уменьшены на 10');
    // });

    // document.getElementById('bite').addEventListener('click', () => {
    //     const damage = Math.floor(Math.random() * 20) + 1;
    //     player.stats.hp = Math.max(player.stats.hp - damage, 0);
    //     ui.updateAllBars();
    //     ui.addEventToLog(`Вы получили укус на ${damage} урона!`);
    // });

     // Обработчики инвентаря
    UI_DOM.inventoryButton.addEventListener('click', () => {ui.toggleVisibility(UI_DOM.inventoryPanel)} );
    UI_DOM.closeInventoryButton.addEventListener('click',() => {ui.toggleVisibility(UI_DOM.inventoryPanel)} );

    UI_DOM.settingsButton.addEventListener('click', () => {ui.toggleVisibility(UI_DOM.settingsPanel)} );
    UI_DOM.closeSettingsButton.addEventListener('click',() => {ui.toggleVisibility(UI_DOM.settingsPanel)} );

    UI_DOM.relationsButton.addEventListener('click', () => {ui.toggleVisibility(UI_DOM.relationsPanel)} );
    UI_DOM.closeRelationsButton.addEventListener('click',() => {ui.toggleVisibility(UI_DOM.relationsPanel)} );

    UI_DOM.hystoryButton.addEventListener('click', () => {ui.toggleVisibility(UI_DOM.hystoryPanel)} );
    UI_DOM.closeHystoryButton.addEventListener('click',() => {ui.toggleVisibility(UI_DOM.hystoryPanel)} );
}
