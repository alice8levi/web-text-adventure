import items from "../item-system/items.js";
import player from "../player/player.js";


// Система случайных событий
const events = [
    {
        id: 'findHealthPotion',
        name: 'Найдено зелье здоровья',
        probability: 0.2,
        action: () => {
            // addToInventory(items.healthPotion);
            // addEventToLog('Вы нашли зелье здоровья!');
        }
    },
    {
        id: 'findCoins',
        name: 'Найдены монеты',
        probability: 0.3,
        action: () => {
            // player.exp.total += 10;
            // player.exp.calcLVL();
            // updateLVL();
            // addEventToLog('Вы нашли 10 монет опыта!');
        }
    },
    {
        id: 'enemyAttack',
        name: 'Атака врага',
        probability: 0.25,
        action: () => {
            // const damage = Math.trunc(Math.random() * 15) + 5;
            // player.stats.hp = Math.max(player.stats.hp - damage, 0);
            // updateAllBars();
            // addEventToLog(`Враг атаковал вас и нанес ${damage} урона!`);
        }
    },

];
    // Случайные события
function startRandomEvents() {
        setInterval(() => {
            const now = Date.now();
            if (now - player.lastEventTime > 5000) { // Не чаще чем раз в 5 секунд
                tryTriggerEvent();
                player.lastEventTime = now;
            }
        }, 1000);
    }

function tryTriggerEvent() {
        const randomValue = Math.random();
        let cumulativeProbability = 0;
        
        for (const event of events) {
            cumulativeProbability += event.probability;
            if (randomValue <= cumulativeProbability) {
                event.action();
                return;
            }
        }
    }
export {events, startRandomEvents, tryTriggerEvent} ;


