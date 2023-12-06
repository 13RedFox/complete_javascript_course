'use strict';

/*

function logger() {
  console.log('My name is Jhon');
}

logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(3, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

// Arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1991);

console.log(age1, age2, age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;

  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, 'Alex'));

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange`;
  return juice;
}

console.log(fruitProcessor(3, 5));

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }

  // return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, 'Alex'));

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years1 = new Array(1991, 1984, 2003, 2020);
console.log(years1);

console.log(friends.at(-1));

friends[2] = 'Jay';
console.log(friends);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1956, 2003, 2010, 2018];

console.log(calcAge(years[0]));
console.log(calcAge(years[1]));
console.log(calcAge(years[years.length - 1]));

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years.at(-1))];
console.log(ages);

const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay');
console.log(friends);

console.log(friends.indexOf('Peter')); // 2 return position in array or -1 
console.log(friends.indexOf('Bob')); // -1

console.log(friends.includes('Peter')); // true (return true or false) Проверяет строгим сравнением

if (friends.includes('Peter')) {
  console.log('You have a friend called Peter');
}

const jonas = {
  firstName: 'John',
  lastName: 'Doe',
  age: 2037 - 1991,
  job: 'teacher',
  friend: ['Michael', 'Steven', 'Peter'],
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['firstName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// const intrestingIn = prompt(
//   'What do you want to know about Jonas? Choose between firstName, lastName, age, job, friends',
// );

// if (jonas[intrestingIn]) {
//   console.log(jonas[intrestingIn]);
// } else {
//   console.log('Wrong request! Choose between firstName, lastName, age, job, friends');
// }

jonas.location = 'Portugal';
jonas['twitter'] = '@example';

console.log(jonas);
console.log(
  `${jonas.firstName} has ${jonas.friend.length}, and his best friend is called ${jonas.friend[0]}`,
);

const jonas = {
  firstName: 'John',
  lastName: 'Doe',
  birthYear: 1991,
  job: 'teacher',
  friend: ['Michael', 'Steven', 'Peter'],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${
      this.hasDriversLicense ? 'a' : 'no'
    } driver's license`;
  },
};

// console.log(jonas.calcAge());
// console.log(jonas.age);
console.log(jonas.getSummary());

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️`);
// }

const years = [1991, 2002, 2008, 2013, 2018, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}

console.log(ages);

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`Starting ex... ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Rep...${rep}`);
  }
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 6) console.log('Loop is about to end...');
}
*/
