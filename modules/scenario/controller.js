import { createButton } from "../UI/updaters.js"
import { oneCharPrinter } from "../UI/updaters.js"
import * as UI_DOM from '../../config/dom-consts.js'
// // История > Глава > Сцена > Позиция Сцены > текст
// //                                           > кнопки > последствия

// Story = {
//     title: '',
//     description: '',    
//     chapters: [chapter1Obj, chapter2Obj, chapter3Obj],

// }

// chapterObj = {
//     id: 0,
//     title: 'Chapter 1',
//     score: 0,
//     scenes: [{sceneObj}, {sceneObj}, {sceneObj}],
// }

// // scenes = [{sceneObj}, {sceneObj}, {sceneObj}]

// sceneObj = {
//     id: 0, 
//     title: 'Scene in Cafe',
//     sceneArr : [storyPoint, storyPoint, storyPoint, storyPoint],
// }

// //позиция сцены
// storyPoint = {
//     id: 0,
//     // текст позици сцены
//     currentText : ['Вы открываете глаза. Темнота.От холодного бетоннго пола онемела спина. Голова гудит, во рту — вкус крови.',
//         ], 

//     //объекты кнопок сцены            
//     currentActinButtons : [actionBtns[1],
//                            actionBtns[2],
//                            ] ,
// }


// actionBtns = [
//     {
//         id: 0,
//         title: "Next",
//         action: () => {
//             // player.exp.total += 10;
//             // player.exp.calcLVL();
//             // updateLVL();
//             // addEventToLog('Вы нашли 10 монет опыта!');
//         },
//         next_position: "scene position arr"
//     },

//     {
//         id: 1,
//         title: "Ощупать себя",
//         action: () => {},
//         next_position: -1,
//     },
//     {
//         id: 2,
//         title: "Осмотреться",
//         action: () => {},
//         next_position: -1,
//     }
// ]

// dialogObj = {
//     id: 0,
//     actors: [player, [NPC1, NPC1]]
// }
// 
// 
let storyPoint = {
    id: 0,
    // текст позици сцены
    currentText : ['Вы открываете глаза. Темнота.От холодного бетоннго пола онемела спина. Голова гудит, во рту — вкус крови.',
       'TEXT2', 'TEXT3' ], 
    currentPos : 0,
    //объекты кнопок сцены            
//     currentActionButtons : [actionBtns[1],
//                            actionBtns[2],
//                            ] ,
 }


export function test() {
    
    if(storyPoint.currentPos < storyPoint.currentText.length-1) {
        oneCharPrinter(storyPoint.currentText[storyPoint.currentPos++], 30, UI_DOM.outputText)
        createButton('action-buttons',"111", { id: '1', class: 'action_btn' }, test) //добавить очистку, объединить
    }
    else {
        oneCharPrinter(storyPoint.currentText[storyPoint.currentPos++], 30, UI_DOM.outputText)
        createButton('action-buttons',"TEST", { id: '3', class: 'action_btn' }, ()=>alert()) 
    }
    
}