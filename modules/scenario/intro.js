
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