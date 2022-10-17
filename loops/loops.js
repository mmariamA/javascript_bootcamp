//WHILE LOOP
// while (condition) {
//     //code that gets executed as long as the condition is true
// }

let i = 0;
while(i < 10) {
    console.log(i);
    //i = i + 1; //i++
    i = i +2; //i +=2
}

// let someArray = ['Mike', 'Antal', 'Marc', 'Emir', 'Louiza', 'Jacky']

// let notFound = true;

//  while (notFound && someArray.length > 0) {
//     if (someArray[0] === 'Louiza') {
//         console.log('Found her!');
//         notFound = false;
//     } else {
//         someArray.shift();
//     }
//  }

 //DO LOOP
//  let number;
//  let counter = 0;
//  do{ 
//  number = prompt(`Please enter a number between 0 and 100: Counter${counter++}`);
// } while (!(number >= 0 && number < 100));

//EXERCISE WHILE LOOPS
//1
// const maxValue = 100;

// //2
// const rnd = Math.floor((Math.random() * maxValue) + 1)
// //console.log(rnd

// //3
// let isCorrect = false;
// let lives = 5;

// //4
// let number = parseInt(window.prompt(`Enter the guessed number: lives-${lives}`))

// // while(!isCorrect && lives > 0){
//     if(number === rnd){
//         isCorrect = true;
//         console.log('Hurray, you guessed it right')
//     } else {
//         lives--;
//         if(lives === 0){
//             console.log('Game Over')
//             console.log(`Your number is ${rnd}`)
//          }
//        else{
//         if(number > rnd){      
//             console.log('your guess is high, go low')
//             number = parseInt(window.prompt(`Enter the guessed number: lives-${lives}`))
//          } else {
//             console.log('your guess is low, go high')
//             number = parseInt(window.prompt(`Enter the guessed number: lives-${lives}`))
//          }
//        }
//     }
// }

//FOR LOOP
for (let i= 0; i < 10; i++){
    console.log(i)
}

let arr =[];
for(let i = 0; i < 100; i++){
    arr.push(i);
}
console.log(arr)

//NESTED LOOPS
let arrOfArrays = []

for (let i = 0; i < 3; i++){
    arrOfArrays.push([]);
    for(let j = 0; j < 7; j++) {
        arrOfArrays[i].push(j)
    }
}
console.log(arrOfArrays)

//LOOPS AND ARRAYS
let names = ['Chantal', 'John', 'Maxime', 'Bobbi', 'Jair']
for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

//LOOPS EXERCISE 1
//1
let  counter = 0;
//2
let step = 5;
//3
do{
counter = counter + step
console.log(counter)
} while(!(counter >= 100))
//EXERCISE 2
//1
let myWork = []

//2
for(let i = 1; i < 11; i++){
    //console.log('Lesson',i)
    let stats = i % 2 === 0 ? true : false//3
    let Lessons = {'Lesson': i, stats } //4
    myWork.push(Lessons) //5
}
//6
console.log(myWork)



//EXERCISE 3
//1
let myTable = []
//2
let noOfRows = 3
let noOfColumns = 3

//3
let tableCounter = 0

//4
for(let i = 0; i < 3; i++){
   let tempTable = []
  // tempTable.push(i)
   for(let j= 0; j < 4; j++){
    tableCounter++
   }
   tempTable.push(tableCounter)
   myTable.push(tempTable)
}

console.table(myTable)

//EXERCISE 4
//1
let gridArray = []

//2
let noOfCell = 64;

//3
let gridCounter = 0;

//4
let rowArray = []
//let row = []

//5
// for(i = 0; i < 64; i++){
//     if(gridCounter % 8=== 0){
//         if(!(rowArray===undefined)){
//             gridArray.push(rowArray)
//             gridCounter++
//         }
//     } 
//     let tempVar = gridCounter
// rowArray.push(tempVar)
// if(gridCounter === 8){
//     gridArray.push(rowArray)
// }
// gridArray.push(rowArray)
// console.log(gridArray)
// }
