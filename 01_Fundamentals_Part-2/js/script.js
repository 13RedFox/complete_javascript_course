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
*/
