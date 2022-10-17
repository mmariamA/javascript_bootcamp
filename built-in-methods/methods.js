console.log('Hello Built-in Methods')

// let arr = ['grapefruit', 4, 'hello', 5.6, true];

//                 //primarily   primarily
//                  //  for         for
//                  //  element,    index
// function printStuff(element,    index){
//     console.log(`Printing stuff: ${element} on array position: ${index}`);
// }
//FOR EACH
// arr.forEach(printStuff)
//arrow method
// arr.forEach((element, index) => {
//     console.log(`Best way of printing Element: ${element} & Index:${index}`)
// })

// let arr = ['Squirrel', 5, 'Tjed', new Date(), true];

// function checkString(element, index) {
    //  return typeof element === 'string'
// }
// //FILTER
// (e, i) => typeof e === 'string'

// let filterArr = arr.filter((e, i) => typeof e === 'string');
// console.log(filterArr)
//EVERY
//for 'every' function to be true, all the conditions in the array must be true. i.e in the condition above, all the elements must be string
// console.log(arr.every(checkString))

//arr = ['grapefruit', 4, 'hello', 5.6, true]

//arr.copyWithin(1, 3, 4);

//arr.copyWithin(0, 2, 4);

//console.log(arr)
//COPY WITHIN
// arr = ['grapefruit', 4, 'hello', 5.6, true];
// arr.copyWithin(0, 2, 4)
// console.log(arr)

//MAP
let arr = [1000, 2000, 3000, 4000];
let mapped_arr = arr.map(x => `$${x}`);
console.log(mapped_arr)