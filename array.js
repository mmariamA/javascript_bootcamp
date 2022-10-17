console.log('ARRAYS')

const myStudents = ['Miriam', 'Delight', 'Progress', 'Petra', 'Dappa', 'Tems', 'Caleb', 'Felix', 'Henry', 'Cruz', 'Paul', 'Fidelis', 'Camilus', 'Victory', 'Grace', 'Amas'];
console.log(myStudents);

var firstName = myStudents[0]
console.log(firstName)

myStudents[0] = 'Temple';
console.log(myStudents)

// length property
let numOfStudents = myStudents.length;
console.log(numOfStudents)

// Exercise1
const shoppingList = ['Milk', 'Bread', 'Apples']
console.log(shoppingList);

let listLength = shoppingList.length;
console.log(listLength)

shoppingList[1] = 'Bananas'
console.log(shoppingList)
// Exercise1

// ARRAY METHODS
// Adding and replacing elements
myStudents.push('Miriam');
console.log(myStudents);

// adding and removing first item
myStudents.unshift('Wilson')
console.log(myStudents)

myStudents.shift()
console.log(myStudents)

// removing last item
myStudents.pop()
console.log(myStudents)

// to remove nth item
// variablename.splice(index Number, numbers of item to remove)
myStudents.splice(11,1)
console.log(myStudents)

// removing and replacing nth item
myStudents.splice(14, 1, 'Queen');
console.log(myStudents)

// to find the index of an item
const mariamIndex = myStudents.indexOf('Delight')
console.log(mariamIndex)
// NOTE: shift, unshift, push, splice, indexof are all functions

// HIGHER ORDER METHODS
const arr = ['Wilson', 'Daniel', 'Wilson', 'Joe', 'Raymond', 'Wilson']
const wilsonIndex = arr.filter((name) => name === 'Wilson')
console.log(wilsonIndex)

// how to sort elements
const sortedArr = myStudents.sort()
console.log(sortedArr)

myStudents.reverse()
console.log(myStudents)

// EXERCISE 2
// 1
const shoppingList2 = []
console.log(shoppingList2)

// 2
shoppingList2.push('Milk', 'Bread', 'Apples')
console.log(shoppingList2)

// 3
shoppingList2.splice(1, 1, 'Bananas', 'Eggs')
console.log(shoppingList2)

// 4*
shoppingList2.pop()
console.log(shoppingList2)

// 5
const sortedList = shoppingList2.sort()
console.log(sortedList)

// 6
const milkIndex = shoppingList2.indexOf('Milk')
console.log(milkIndex)

// 7
shoppingList2.splice(1, 0, 'Carrots', 'Lettuce')
console.log(shoppingList2)

// 8
const newList = ['Juice', 'Pop']
console.log(newList)

// 9
const concatList1 = shoppingList2.concat(newList)
console.log(concatList1)

const concatList2 = concatList1.concat(newList)
console.log(concatList2)

// 10
const lastIndex = concatList2.length - 1;
console.log(lastIndex)
// exercise 2

// MULTIDIMENTSIONAL ARRAYS
const myArr =[
    [[1,2,3,4], [1,2,3,4], [1,2,3,4], [1,2,3,4]],
    [[1,2,3,4], [1,2,3,4], [1,2,3,4], [1,2,'W',4]],
    [[1,2,3,4], [1,2,3,4], [1,'R',3,4], [1,2,3,4]]
]
console.log(myArr [1][3][2])
console.log(myArr [2][2][1])

// OBJECTS IN JAVASCRIPT
// Note: []is for array {}is for objects ()is for functions

const mariam = {
    firstName: 'Mariam',
    lastName: 'Akokhia',
    age: 32,
    gender: 'Female',
    complexion: 'dark',
    height: '5.10',
    weight: '65', //leave units in string ''
}

const myHeight = mariam.height //dot notation
console.log(myHeight)

const myWeight = mariam['weight'] //square bracket notation
console.log(myWeight)

mariam['lastName'] = 'Potter'
mariam.middlename = 'Akokhia'

console.log(mariam);

//EXERCISE 4
//1
const myCar = {
    make: 'Toyota',
    model: 'RX350',
    milage: '2000',
    year: 2018,
    use: 'first',
    valueForSale: '#15000000',
    color: 'Gold'
}

//2
let carColor = ['color']
myCar[carColor] = 'Red'
console.log(myCar)

//3
carColor = 'forSale'
myCar['forSale'] = 'false';
console.log(myCar)

//4
const make = myCar.make;
const model = myCar['model']
console.log(`Make: ${make}`)
console.log(`Model: ${model}`)

//5
const forSale = myCar['forSale']
console.log(`Is car for sale?: ${forSale}`)

//WORKING WITH OBJECTS AND ARRAYS
// OBJECTS IN OBJECTS
const student = {
    fullName: 'Peter Obi',
    jambReg: '40263264HB',
    matNum: 'U2014/5575001',
    bio: {
        age: 32,
        gender: 'M',
        dob: '12/2/1990',
        stateOfOrigin: 'Anambra',
        lga: 'Njikoka',
        healthStatus: {
            bloodGroup: 'O+',
            genotype: 'AA',
            mantus: false,
        }
    },
    levels: ['LV100', 'LV200', 'LV300', 'LV400'],
    currentLevel: 'LV300',
    courses: [
        {
            "YR1":{
                sem1: ['MTH120.1', 'GES100.1', 'CHM130.1'],
                sem2: ['MTH114.1', 'GES104.1', 'PHY101.1'],
            },
            "YR2":{
                sem1:[],
                sem2:[],
            }
        }
    ]
}
const ges104 = student.courses[0].YR1['sem2'][1]
console.log(ges104)

// EXERCISE4
//1
const people = {
    friends: []
}

//2
const firstFriend = {
    firstName: 'Kariebi',
    lastName: 'Dickson',
    idValue: 001,
}
const secondFriend = {
    firstName: 'Asimea',
    lastName: 'Nimingo',
    idValue: 002,
}
const thirdFriend = {
    firstName: 'Noah',
    lastName: 'Anyanimeh',
    idValue: 003,
}
 //3
people.friends.push(firstFriend, secondFriend, thirdFriend)

//4
console.log(people)

// OPERATORS
console.log('1' +'1')
console.log(1 + 1)
console.log(1 + '1')

const sum = 7 + 3;
const minus = 7 - 3;
const times = 7 * 3;
const divide = 7 / 3;
const raise = 7 ** 3;
const modulus = 7 % 3;

//Comparison operators
console.log(7 > 3) //greater than
console.log(7 < 3) //less than
console.log(7 >= 3) //greater than or equal to
console.log(7 <= 3) //less than or equal to
console.log(7 === 3) //equal to
//equal to can also be used to compare string values. It is case sensitive
console.log(7 !== 3) //not equal to

//LOGICAL OPERATORS
//AND, OR
const x = 10; const y = 20;

const myAnswer = 10 < 20 || 'Wilson' === 'wilson';
console.log(`My Answer: ${myAnswer}`)

const myAnswer2 = 10 < 20 && 'Wilson' === 'wilson';
console.log(`My Answer: ${myAnswer2}`)


//CLASS PROJECT
//EXERCISE 1
const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']]
console.log(theList)

theList.pop()
console.log(theList)
theList.shift()
console.log(theList)

theList.unshift('FIRST')
console.log(theList)

theList.splice(2, 5, 'MIDDLE', 'Hello World')
console.log(theList)

theList.push('LAST')
console.log(theList)
// theList
// theList.splice(4, 1, 'Hello World')
// theList.splice(3, 2, 'MIDDLE')
// console.log(theList)

// theList.splice(5,2, 'LAST')
// console.log(theList)

//EXERCISE 2
//1
const inventory = []

//2
const item1 = {
    Name: 'Chips',
    Model: 'Pringles',
    Cost: '1500',
    Quantity: '2'
}

const item2 = {
    Name: 'Bread',
    Model: 'TheChoice',
    Cost: '700',
    Quantity: '1'
}
const item3 = {
    Name: 'Milk',
    Model: 'Peak',
    Cost: '350',
    Quantity: '7'
}
//3
inventory.push(item1, item2, item3);
console.log(inventory)

//4
console.log(inventory[2]['Quantity'])
console.log(inventory[2].Quantity)