console.log('Hello Logic')

var x = 10; //global variable

if(x > 2){
    console.log('Buy a  black marker')
    //code
    // console.log(x);
    // let y = 20; //local variable
    // console.log(y)
} else {
    //Altetrnative Code
    console.log('Buy any color')
}

//EXERCISE 1
//1
const myVariable = true;

//2
console.log(myVariable)

//3
if(myVariable){
    console.log('This is correct')
} else {
    console.log('This is wrong')
}
//ELSE-IF STATEMENT
const marker = 'blue'
const markerLength = 'short'

if(marker === 'black' && markerLength === 'short'){
    console.log('Buy black marker')
} else if((marker === 'red' || marker === 'green') && markerLength === 'short'){
    console.log('Buy red or green and short marker')
} else { console.log('Buy any marker')}
    
if(marker === 'black'){
    if(markerLength === 'short'){
        console.log('Buy black and short marker')
    }else{
        console.log('let\'s manage the long one')
    }
}

//EXERCISE 2
//1
// const age = window.prompt()

//2
// const age2num = Number(age)
// console.log(age2num)

//3
// let reply;

//4, 5,6 & 7
// if(age2num >= 21){
    // reply ='Allow entry and Alcohol Purchase'
// } else if(age2num >= 19){ //5
    // reply =('Allow entry but deny Alcohol Purchase')
// } else { //6
    // reply ='Deny entry'
// }
//7
// console.log(reply)

//CONDITIONAL TENARY OPERATORS
const gender = 'Male';

if(gender === 'Male'){
    console.log('He is a boy')
} else if(gender === 'Female'){
    console.log('She is a girl')
} else{
    console.log('He or she is others')
}

gender === 'Male' ? console.log('He is a boy') : gender === 'Female' ? console.log('She is a girl') : console.log('He or she is others')

//EXERCISE 3
//1
let id = true;

//2
const message = id ? 'Your\'re allowed inside' : 'You\'re not allowed'

//3
console.log(message)

//SWITCH STATEMENTS
const currentDay = 'Friday'

switch(currentDay){
    case 'Monday':
        console.log('I hate Mondays');
    break;
    case 'Tuesday':
        console.log('Tuesday is no class');
    break;
    case 'Wednesday':
        console.log('I love Wednesday');
    break;
    case 'Thursday':
        console.log('This is super story');
    break;
    case 'Friday':
        console.log('TGIF');
    break;
    case 'Saturday':
        console.log('And on the 7th  day, He Rested');
    break;
    case 'Sunday':
        console.log('Go to church');
    break;
    default:
        console.log('Invalid data')
}
