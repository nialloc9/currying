import simpleAdd from './simpleAdd';
import deeplyCurriedGreeting from './deeplyCurriedGreeting';
import unitConverter from './unitConverter';

const add10 = simpleAdd(10);

const twenty = add10(10);
const thirty = add10(20);

console.log(`Twenty: ${twenty}`); //Twenty: 20
console.log(`Thirty: ${thirty}`); //Thirty: 30

const greeting = deeplyCurriedGreeting("Hello");

const seperator = greeting(" ");

const greetNiall = seperator("Niall");

const greetJohn = seperator("John");

console.log(greetNiall); //Hello Niall
console.log(greetJohn); //Hello John

// curried functions can be done all at once
const remCalc = unitConverter("rem")(0.071428571)(0);
const emCalc = unitConverter("em")(0.071428571)(0);
const milesToKm = unitConverter(" miles")(1.60936)(0);

const tenPxToRem = remCalc(10);
const tenPxToEm = emCalc(10);
const twentyTwoMilesToKm = milesToKm(22);

console.log(tenPxToRem); //0.71428571rem
console.log(tenPxToEm); //0.71428571em
console.log(twentyTwoMilesToKm); //35.405919999999995 miles