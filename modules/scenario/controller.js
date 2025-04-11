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
// example
let storyPoint = {
    id: 0,
    // текст позици сцены
    currentText : ['Вы открываете глаза. Темнота.От холодного бетоннго пола онемела спина. Голова гудит, во рту — вкус крови.',
       'TEXT2', 'TEXT3' ], 
    currentPos : 0, //current position in currentText array
    //объекты кнопок сцены            
    // currentActionButtons : [actionBtns[1],
    //                        actionBtns[2],
    //                        ] ,
    storyScore: 9,
    maxScore:10,
    waysCount:3,
    calcNextPoint: (maxScore, waysCount )=>{
        const part = Math.trunc(maxScore/waysCount)
        let nextIndex = ++storyPoint.id
        for(let i=1; i<=waysCount;i++) {
            if(storyPoint.storyScore > part*i) {
                nextIndex++
                continue
            }
            else {
                return nextIndex
            }
            
        }
        
    }
 }

 //action button example
// let actionBtn = {
//     id: 0,
//     name: "Далее...",    
//     handler: test,
//     attrs: {
//         class: "action-btn"
//     }
// }

//constructor
function ActionButton(id ,name ,handler_callback, tag_attributes) {
    this.id= id;
    this.name = name;    
    this.handler = handler_callback;
    this.attrs = tag_attributes;
}

const nextBtn = new ActionButton(0, "Далее...", test, {class: "action-btn"})
let storyScore = 0
function h1() {
    storyScore++
    alert('Вы напугали деда')
}

function h2() {
    storyScore +=5
    alert('Вы порадовали деда')
}
function h3() {
    storyScore +=10
    alert('Вы убили деда')
}


//StoryPoint.currentActionButtons
const actionButtonsArr = [
    new ActionButton(1, "Осмотреться", h1, {class: "action-btn"}),
    new ActionButton(2, "Ощупать себя", h2, {class: "action-btn"}),
    new ActionButton(3, "Попытаться вспомнить, что случилось", h3, {class: "action-btn"}),
]
function toNextPoint(newPoint) {
    currentStoryPoint = newPoint
}


export function test() {
    
    if(storyPoint.currentPos < storyPoint.currentText.length-1) {
        clear(UI_DOM.outputText, UI_DOM.buttonsContainer)    
        oneCharPrinter(storyPoint.currentText[storyPoint.currentPos], 30, UI_DOM.outputText) //print current text char by char
        storyPoint.currentPos++
        createButton('action-buttons-container',nextBtn.name, nextBtn.attrs, nextBtn.handler) //вынести в ункцию updateStoryScreen
    }
    else {
        clear(UI_DOM.outputText, UI_DOM.buttonsContainer)
        oneCharPrinter(storyPoint.currentText[storyPoint.currentPos], 30, UI_DOM.outputText)
        actionButtonsArr.forEach((button)=>createButton('action-buttons-container',button.name, button.attrs, button.handler))
         alert(`NEXT ARR INDEX =`+storyPoint.calcNextPoint(storyPoint.maxScore,storyPoint.waysCount))
    }
    
} 

function clear(...elems) {
    for (const elem of elems) {
        elem.innerHTML = "";
    }
}