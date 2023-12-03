'use strict';

console.log('----< script.js >----');

// 009 => Linking a JavaScript File.

// let js = 'amazing';

// console.log(40 + 8 + 23 - 10);

// 010 => Values and Variables.

// let firstName = 'Jonas';
// console.log(firstName);

// let jonas_matilda = 'JM';
// let $function = 27;

// let person = 'jonas';
// let PI = 3.14159;
// let myFirstJob = 'Programmer';
// let myCurrentJob = 'Gamer and Coder';

// 012 => Data Types.

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year); // undefined

// year = 1991;
// console.log(typeof year); // number

// console.log(typeof null); // object

// 013 => let, const and var.

// let age = 30;
// age = 31;

// const birthYear = 1991;

// 014 => Basic Operators.

// Math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2020;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = 'Jonas';
// const lastName = 'Doe';

// console.log(firstName + ' ' + lastName);

// // Assignment operators
// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;

// console.log(x);

// // Comparison operators
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// 015 => Operator Precedence.

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2020;

// let x, y;

// x = y = 25 - 10 - 5; // x = y = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// 016 => Coding Challenge #1.

// const massMark = 78;
// const heightMark = 1.69;
// const massJhon = 92;
// const heightJhon = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJhon = 85;
// const heightJhon = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJhon = massJhon / heightJhon ** 2;
// console.log(BMIMark, BMIJhon);

// const markHeherBMI = BMIMark > BMIJhon;
// console.log(markHeherBMI);

// 017 => String and Template Literals.

// const firstName = 'John';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jhon = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(jhon);

// const jhonNew = `I'm  ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jhonNew);

// 018 => Talking Decisions if else Statements.

// const age = 15;

// if (age >= 18) {
//   console.log(`Sarah can start driving license 🏎️`);
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years 😉`);
// }

// const birthYear = 1991;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// 019 => Coding Challenge #2.

// const massMark = 78;
// const heightMark = 1.69;
// const massJhon = 92;
// const heightJhon = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJhon = 85;
// const heightJhon = 1.76;

// const BMIMark = (massMark / heightMark ** 2).toFixed(1);
// const BMIJhon = (massJhon / heightJhon ** 2).toFixed(1);

// if (BMIMark > BMIJhon) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than Jhon's (${BMIJhon})`);
// } else {
//   console.log(`Jhon's BMI (${BMIMark}) is higher than Mark's (${BMIJhon})`);
// }
