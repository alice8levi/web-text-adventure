
// Инвентарь
// function toggleInventory() {
//     inventoryPanel.classList.toggle('hidden');
// }

import * as UI_DOM from '../../config/dom-consts.js'; //собирает элементы DOM-дерева

import * as ui from '../UI/updaters.js'
import player from "../player/player.js";

export function initInventory() {
    // Очищаем слоты
    UI_DOM.inventorySlots.innerHTML = '';
    
    // Добавляем 10 слотов
    for (let i = 0; i < 10; i++) {
        const slot = document.createElement('div');
        slot.className = 'inventory-slot';
        slot.dataset.index = i;
        slot.addEventListener('click', () => useItem(i));
        
        if (player.inventory[i]) {
            slot.innerHTML = player.inventory[i].icon;
            slot.title = player.inventory[i].title;
        }
        
        UI_DOM.inventorySlots.append(slot);
    }
}

export function addToInventory(item) {
    const emptySlot = player.inventory.findIndex(slot => slot === null);
    if (emptySlot !== -1) {
        player.inventory[emptySlot] = item;
        ui.updateInventoryUI();
    } else {
        ui.addEventToLog('Инвентарь полон!');
    }
}

export function useItem(slotIndex) {
    if (player.inventory[slotIndex]) {
        const item = player.inventory[slotIndex];
        
        if (item.effect.hp) {
            player.stats.hp = Math.min(player.stats.hp + item.effect.hp, player.const_stats.MAX_HP);
            ui.addEventToLog(`Использовано ${item.title}! +${item.effect.hp} HP`);
            ui.updateAllBars();
        }
        
        player.inventory[slotIndex] = null;
        ui.updateInventoryUI();
    }
}
