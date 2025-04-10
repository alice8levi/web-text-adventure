
import * as UI_DOM from './config/dom-consts.js'; //собирает элементы DOM-дерева


import * as e from './modules/event-system/events.js'
import * as el from './modules/event-system/event-log.js' //пустой

import * as inv from './modules/inventory/inventory.js' //инвентарь

import * as timer from './modules/time/timer.js' //время

import * as ui from './modules/UI/updaters.js'
import initAllUIListeners from './modules/UI/listeners.js'
// Система предметов
import items from "./modules/item-system/items.js";


 import player from "./modules/player/player.js";
// import events from "/events.js";

import { test } from './modules/scenario/controller.js';


// Инициализация игры
const text = 'Вы открываете глаза. Темнота.От холодного бетоннго пола онемела спина. Голова гудит, во рту — вкус крови.'
// Запуск игры
document.addEventListener('DOMContentLoaded', ()=>
    {
        inv.addToInventory(items[0]);
        ui.updateName();
        ui.updateLVL();
        ui.updateAllBars();
        inv.initInventory();
        timer.startGameTimer();
        e.startRandomEvents();
        ui.updateInventoryUI();
        
        initAllUIListeners();
        
        test()
    }
);