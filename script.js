"use strict";

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('i can drive')

Functions

function logger() {
    console.log('my name is igor')
}

logger()

function fruitProcessor(apples, oranges) {

    const juice = `juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(4, 5)
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)

function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear
}

const age1 = calcAge1(1991);
console.log(age1)

//function expression... producess value
const calcAge2 = function(birthYear) {
    return 2037 - birthYear
}
const age2 = calcAge2(1991)
console.log(age1,age2)

arrow functions

const calcAge = birthYear => 2037 - birthYear;
const age3 = calcAge(1991)
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement}`;
}

console.log(yearsUntilRetirement(1991, 'John'))

callback functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `juice with ${applePieces} apples and ${orangePieces} oranges.`
    return juice;
}

console.log(fruitProcessor(2,3))

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;
    if(retirement > 0) {
        return retirement
    } else {
        return -1;
    }

    //return `${firstName} retires in ${retirement}`;
}

console.log(yearsUntilRetirement(1991, 'John'));
console.log(yearsUntilRetirement(1970, 'Mike'));

function challange #1

const calcAvrage = (x,y,z) => {
    return (x+y+z) / 3;
}

const dolphinsAvg = calcAvrage(85, 54, 71)
const koalasAvg = calcAvrage(23, 34, 27)

function calcWinner(dolphinsAvg, koalasAvg) {
    if(dolphinsAvg > koalasAvg * 2) {
        return console.log(`dolphins win (${dolphinsAvg} vs. ${koalasAvg})`)
    } else if (koalasAvg > dolphinsAvg *2) {
        return console.log(`koalas win (${koalasAvg} vs. ${dolphinsAvg})`)
    } else {
        return console.log(`nobody wins koalas: ${koalasAvg} vs dolphins: ${dolphinsAvg}`)
    }
}
calcWinner(dolphinsAvg, koalasAvg)

calcWinner(5444, 125)
calcWinner(12, 893)

arrays

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends)

// const years = new Array(1992, 2984, 2008, 2020);
// console.log(years)

console.log(friends[0])

console.log(friends.length)
console.log(friends[friends.length - 1])
friends[2] = "Jay"
console.log(friends)

const firstName = "john";
const john = [firstName, "smith", 2037 - 1991, 'teacher', friends]

console.log(john)

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018]

const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[2])
console.log(age1)

const ages = [calcAge(years[0]), calcAge(years[years.length - 1])]
console.log(ages)

array methods

const friends = ["Michael", "Steven", "Peter"];

//add elements
const newLength = friends.push("Jay");

console.log(friends);
console.log(newLength)

friends.unshift("John")
console.log(friends)
//remove elements

friends.pop()// removes last element
const popped = friends.pop()
console.log(popped)
console.log(friends)

friends.shift() //removes first element
console.log(friends)

console.log(friends.indexOf("Steven"))

console.log(friends.includes('Steven')) //true or false

if (friends.includes("Peter")){
    console.log("you have a friend called Peter")
} else {
    console.log("you don't have a friend called Peter")
}

arrays challenge #2

function calcTip(x) {
    if(x >= 50 && x <= 300) {
       return 15 * x / 100 ;
    } else {
        return x * 20 / 100;
    }
}

const bills = [125, 555, 44]

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])]

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
console.log(tips)
console.log(total)
calcTip()

objects

const jonas = {
    firstName: "Jonas",
    lastName: "Smith",
    age: 2037 - 1991,
    job: "teacher",
    firends: ["Michael", "Peter", "Steven"]
}
console.log(jonas)
console.log(jonas.lastName)
console.log(jonas['lastName'])

const nameKey = 'Name';

console.log(jonas['first' + nameKey])
console.log(jonas['last' + nameKey])

// const interestedIn = prompt("what do you want to know about Jonas? shoose between, firstName, lastName, age, job, and friends")
// console.log(jonas[interestedIn])

// if(jonas[interestedIn]) {
//     console.log(jonas[interestedIn])
// } else {
//     console.log("wrong request")
// }

jonas.location = "Portugal"
jonas['twitter'] = "@jonasssss"
console.log(jonas)

//challenge

// "Jonas has 3 friends and his best friend is called Michael"

console.log(jonas.firstName + " has " + jonas.firends.length + " friends. and his best friend is " + jonas.firends[0])
console.log(`${jonas.firstName} has ${jonas.firends.length} friends, and his best friend is ${jonas.firends[0]}`)

object methods

const jonas = {
    firstName: "Jonas",
    lastName: "Smith",
    birthYear: 1991,
    job: "teacher",
    firends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,

    // calcAge: function() {
    //     return 2037 - this.birthYear;
    // },

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    isDriver: function () {
        if(this.hasDriversLicense === true) {
            this.driver = "and he has a driver's license"
            return this.driver;
        } else {
            return this. driver = "and he doesnt have a driver's license"
        }
    },
    getSummary: function() {
       return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    }
};
console.log(jonas.calcAge())
console.log(jonas.age);

console.log(jonas.isDriver())
//console.log(jonas["calcAge"](1991));

//challenge
//"onas ia a 46-year old teacher. and it has a drivers license"

console.log(`${jonas.firstName} is ${jonas.age}-year old ${jonas.job}.${jonas.driver}`)

console.log(jonas.getSummary())

challenge objects and arrays #3

const john = {
    firstName: "John",
    lastName: "Smith",
    weight: 92,
    hight: 1.69,
    calcBmi: function() {
        this.bmi = this.weight / this.hight ** 2;
        return this.bmi
    },
}
const mark = {
    firstName: "Mark",
    lastName: "Miller",
    weight: 78,
    hight: 1.95,
    calcBmi: function() {
        this.bmi = this.weight / this.hight ** 2;
        return this.bmi
    },
}
console.log(john.calcBmi())
console.log(mark.calcBmi())

if (john.bmi > mark.bmi) {
    console.log(`${john.firstName}'s ${john.lastName} BMI ${john.bmi} is higher than ${mark.firstName}'s ${mark.lastName} BMI ${mark.bmi}`)
} else {
    console.log(`${mark.firstName}'s ${mark.lastName} BMI ${mark.bmi} is higher than ${john.firstName}'s ${john.lastName} BMI ${john.bmi}`)
}

john.bmi > mark.bmi ? console.log(`${john.firstName}'s ${john.lastName} BMI ${john.bmi} is higher than ${mark.firstName}'s ${mark.lastName} BMI ${mark.bmi}`) : console.log(`${mark.firstName}'s ${mark.lastName} BMI ${mark.bmi} is higher than ${john.firstName}'s ${john.lastName} BMI ${john.bmi}`)

Loops

console.log("liftting 1")
console.log("liftting 2")
console.log("liftting 3")
console.log("liftting 4")
console.log("liftting 5")
console.log("liftting 6")
console.log("liftting 7")
console.log("liftting 8")
console.log("liftting 9")
console.log("liftting 10")

for(let rep = 1; rep <= 10; rep++) {
    console.log(`liftting ${rep}`)
}

const jonasArray = [
    "Jonas",
    "Smith",
    2037-1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
    true,
]
const types = []
for(let i = 0; i < jonasArray.length; i++) {
    types.push(typeof jonasArray[i])
    //types[i] = typeof jonasArray[i]
}
console.log(types)

const years = [1991, 2007, 1969, 2020]
const ages = []
let total = 0;
for(let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i])
    total = total + years[i]
}
console.log(total)
console.log(ages)

continue and break
console.log('only strings')
for (let i = 0; i < jonasArray.length; i++) {
    if(typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i], typeof jonasArray[i])
}

console.log('break with numbers')
for (let i = 0; i < jonasArray.length; i++) {
    if(typeof jonasArray[i] === 'number') break;
    console.log(jonasArray[i], typeof jonasArray[i])
}

const jonasArray = [
    "Jonas",
    "Smith",
    2037-1991,
    "teacher",
    ["Michael", "Peter", "Steven"],

]

for(let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(jonasArray[i])
}

for (let excersise = 1; excersise < 4; excersise++) {
    console.log(`------ starting excersise ${excersise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${excersise}: lifting weight repetition ${rep}`)
    }
}

while loop
let rep = 1;

while(rep <= 5){
    console.log(`lifting weights repetiotion ${rep}`)
    rep++
}

let dice = Math.trunc(Math.random() * 6) + 1;

while(dice !== 6) {
    console.log(`you rolled ${dice}`)
   dice = Math.trunc(Math.random() * 6) + 1
   if(dice === 6) console.log('loop will stop')
}

challange #4

const tips = [];
const totals = [];

const calcTip = function (bills) {
    return bills >= 50 && bills <= 300 ? 15 * bills / 100 : 20 * bills / 100;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

for(let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]))
    totals.push(bills[i] + calcTip(bills[i]))
}

console.log(tips)
console.log(totals)

const arr = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

function calcAvg(arr) {
    let arrSum = 0;
    for(let i = 0; i < arr.length; i++) {
      arrSum = (arrSum + arr[i])
    }
    return arrSum / arr.length
}
console.log(calcAvg(totals))
