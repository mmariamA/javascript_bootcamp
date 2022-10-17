console.log('Welcome to Functions');

// function sayHello(){
//     let you = prompt("what's your name?");
//     console.log("Hello", you + "!");
// }

// sayHello()

function sayHello2(name){
    console.log(`Hello again ${name}`)
}

//function functionname(parameter){
// this is for the original function creation
//}

sayHello2('Mariam')

// functionname(argument)
// this id for when another person apart from the creator is using it

function addTwoNum(x, y){
    console.log(x + y)
}

addTwoNum(8 , 9)
//ARROW FUNCTIONS
let addTwoNum2 = (x, y, z) => console.log(x + y+ z);

addTwoNum2(5, 7, 5)

const arr = ['Squirrel', 'Alpaca', 'buddy'];
arr.forEach((item, index) =>{
    let newName = `Mr. ${item}`
    console.log(`${index +1}. ${item}`)
})

let spreads = ['so', 'much', 'fun'];
let message = ['JavaScript', 'is', ...spreads, 'and', 'very', 'powerful'];

console.log(message)

function addArr(x, ...y){
    console.log(x + y);
}
addArr('hi', 'there!', 'How are you?')
addArr(3, 4, 6)
//RETURN FUNCTIONS//*
function addThreeNumbers(x, y, z){//*
    return x + y + z;
}
const myAns = addThreeNumbers(5,6,7)
console.log(myAns)
 //in arrow function,
// let addThreeNumbers=(x, y, z) =>{ x + y + z}