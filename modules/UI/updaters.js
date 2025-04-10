import * as UI_DOM from '../../config/dom-consts.js'; 

import player from "../player/player.js";
// Вспомогательные функции
export function updateName() {
    document.getElementById('userName').textContent = player.name;
}

export function updateLVL() {
    document.getElementById('userLVL').textContent = player.exp.lvl;
}


// Обновление всех баров
export function updateAllBars() {
    updateBar('hp', player.stats.hp, player.const_stats.MAX_HP);
    updateBar('mental', player.stats.mental, player.const_stats.MAX_MENTAL);
    updateBar('energy', player.stats.energy, player.const_stats.MAX_ENERGY);
}

export function updateBar(type, current, max) {
    const fillElement = document.getElementById(`${type}Fill`);
    const valueElement = document.getElementById(`${type}Value`);
    
    const percent = (current / max) * 100;
    fillElement.style.width = `${percent}%`;
    valueElement.textContent = `${current}/${max}`;
    
    // Обновление цвета HP бара
    if (type === 'hp') {
        if (percent < 30) {
            fillElement.style.backgroundColor = '#e74c3c';
        } else if (percent < 70) {
            fillElement.style.backgroundColor = '#f39c12';
        } else {
            fillElement.style.backgroundColor = '#2ecc71';
        }
    }
}

//перенести в юи
export function updateInventoryUI() {
    const slots = UI_DOM.inventorySlots.querySelectorAll('.inventory-slot');
    slots.forEach((slot, index) => {
        slot.innerHTML = player.inventory[index] ? player.inventory[index].icon : '';
        slot.title = player.inventory[index] ? player.inventory[index].title : '';
    });
}

export function toggleVisibility(elem) {    
    elem.classList.toggle('hidden');
}

export function addEventToLog(message) {
    const eventEntry = document.createElement('div');
    eventEntry.className = 'event-entry';
    eventEntry.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
    UI_DOM.eventEntries.prepend(eventEntry);
    
    // Ограничиваем количество записей
    if (UI_DOM.eventEntries.children.length > 10) {
        UI_DOM.eventEntries.removeChild(UI_DOM.eventEntries.lastChild);
    }
}

export function oneCharPrinter(text, delay, where) {
 
    let curChar = 0

    function typeCharByChar(text, curChar, terminal) {
        // до тех пор, пока index меньше длины строки
       if (curChar < text.length) {
           //string.charAt(index) -> выводит букву под номером index
           terminal.textContent += text.charAt(curChar) 
           // прокрутка вниз, если не влезло по высоте
           terminal.scrollTop = terminal.scrollHeight;
          
           setTimeout(typeCharByChar, delay, text, ++curChar, UI_DOM.outputText)
       }
       else {
        
       }
   
   }
   setTimeout(typeCharByChar, delay, text, curChar, UI_DOM.outputText)
}

               

export function createButton(dsnId,btnName, infObj, handler) {
    
    let btn = createCustomElement('button', infObj, btnName);
    document.getElementById(dsnId).append(btn);
    btn.addEventListener('click', handler)
}

function createCustomElement(tag, obj, text = false) {
    const element = document.createElement(tag);

    for (let key in obj) {
      element.setAttribute(key, obj[key]);
    }
    if(text) {
        element.textContent = text;
    }
    return element;
  }
  
//   const customBTN = createCustomElement('button', { id: '0', class: 'action_btn' }, "Go to left");
//   document.getElementById('action-buttons').append(customBTN);
//   const customBTN2 = createCustomElement('button', { id: '1', class: 'action_btn' }, "Go to r");
//   document.getElementById('action-buttons').append(customBTN2);
//   const customBTN3 = createCustomElement('button', { id: '3', class: 'action_btn' }, "Go to r");
//   document.getElementById('action-buttons').append(customBTN3);

 