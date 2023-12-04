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

// 020 => Type Conversion and Coercion.

// type conversion
// const inputYear = '1991';
// console.log(Number(inputYear));
// console.log(inputYear + 18);

// type coercion
// console.log('I am ' + 23 + ' years old'); // convert to string
// console.log('23' - '10' - 3); // convert to number
// console.log('23' * '2'); // convert to number ( * and / )

// let n = '1' + 1; // '11'
// n = n - 1; // 10
// console.log(n);

// 021 => Truthy and Falsy Values.

// 5 falsy values: 0, '', undefined, null, NaN.

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));

// const money = 0;

// if (money) {
//   console.log(`Don't spend it all 😉`);
// } else {
//   console.log(`You should get a job!`);
// }

// let height;

// if (height) {
//   console.log('YAY! Height is defined');
// } else {
//   console.log('Height is UNDEFINED');
// }

// 022 => Equality Operators == vs ===.

// const age = 18;

// if (age === 18) console.log('You just became an adult');

// const favorite = Number(prompt("What's your favorite number?", ''));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//   console.log('Cool! 23 is an amazing number!');
// } else if (favorite === 7) {
//   console.log('7 is also a cool number.');
// } else {
//   console.log('Number is not 23 or 7');
// }

// if (favorite !== 23) console.log('Why not 23?');

// 024 => Logical Operators.

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision); // true
// console.log(!hasDriversLicense); // false

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

// const isTired = true; // C
// console.log((hasDriversLicense && hasGoodVision) || isTired); // true

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

// 025 => Coding Challenge #3.

// const teamDolphins = (97 + 112 + 101) / 3;
// const teamKoalas = (79 + 95 + 106) / 3;

// console.log(teamDolphins, teamKoalas);

// if ((teamDolphins >= 100 || teamKoalas >= 100) && teamDolphins > teamKoalas) {
//   console.log('Winner Dolphin');
// } else if ((teamDolphins >= 100 || teamKoalas >= 100) && teamKoalas > teamDolphins) {
//   console.log('Winner Koalas');
// } else if (teamDolphins >= 100 && teamKoalas >= 100 && teamDolphins === teamKoalas) {
//   console.log('Winner two teams');
// } else {
//   console.log('Two team loose this chempionate');
// }

// 026 => The switch Statement.

// const day = 'monday';

// switch (day) {
//   case 'monday':
//     console.log('Plan course structure');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend');
//     break;
//   default:
//     console.log('Not a valid day!');
// }

// 028 => The Conditional Ternary Operator.

// const age = 23;

// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water');

// const drink = age >= 18 ? 'wine 🍷' : 'water';
// console.log(drink);

// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water'}`);

// 029 => Coding Challenge #4.
// const bill = 275;
// const tip = bill >=50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100

// console.log(`The bill was ${bill} and tip was ${tip}, and the total value ${bill + tip}`);
