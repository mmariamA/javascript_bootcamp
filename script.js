console.log('Hello World')

var firstname= 'Mariam';

console.log(firstname);

let lastname= 'Adam';
lastname= 'Akokhia';

console.log(lastname);
const pi= 22/7;
console.log(pi)
// escape characters
let x = 'it\'s a \ngood \tday';
// escape characters
console.log(x);

const fullname = firstname + ' ' + lastname;
const fullname2 = `My fullname is ${firstname} ${lastname}`
console.log(fullname)
console.log(fullname2)

// data type
console.log(typeof fullname);
console.log(typeof pi);
// data type

// boulean
const y = 1 == '1';
console.log(y);
const z = 1 === '1';
console.log(z);
// boulean

// undefined
const t = undefined;
let emptyvar;
console.log(emptyvar);
// undefined

// null
let nullify = null;
console.log(nullify);
// null

// converting data type
const strToNum = Number('1');
console.log(typeof strToNum);

const backToString = String(strToNum);
console.log(typeof backToString);

const toInt = parseInt(pi);
console.log(toInt);
// converting data type