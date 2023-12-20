'use strict';
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`,
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`,
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/* 

const getCode = (str) => str.toUpperCase().slice(0, 3);

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');

  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' ',
  )} ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(
    39,
  );

  console.log(output);
}


// Working With Strings: - Part - 3.

console.log('a+very+nice+string'.split('+')); // => [ 'a', 'very', 'nice', 'string' ]
const [firstName, lastName] = 'John Doe'.split(' ');
console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); // => 'Mr. John DOE'

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica an smith davis'); // => 'Jessica An Smith Davis'
capitalizeName('john doe'); // => John Doe

// Padding

const maskCreditCard = function (number) {
  const str = String(number);
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

// console.log(maskCreditCard(372642738326784)); // => '***********6784'
// console.log(maskCreditCard('372642738326784'));

// Repeat:
const message2 = 'Bad weather... All Departues Delayed... ';
console.log(message2.repeat(2));

// Working With Strings: - Part - 2.

const airline = 'TAP Air Portugal';

airline.toLowerCase(); // tap air...
airline.toUpperCase(); // TAP AIR...

// Fix capitalization name:
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect); // 'Jonas

// Comparing emails:
const email = 'hello@example.com';
const loginEmail = 'Hello@Example.CoM';

const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// Replacing:
const priceGB = '288,97#';
const priceUS = priceGB.replace('#', '$').replace(',', '.');
console.log(priceUS);

// Boolean:
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); // => true or false
console.log(plane.startsWith('Boing')); // => true or false

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log(`Part of the NEW Airbus family`);
}

// Practice exercise:
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// Working With Strings: - Part - 1.

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else {
    console.log('You got lucky');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);

// console.log(question);

// Convert object to map:
// console.log(Object.entries(openingHours));

const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// Quiz app:
console.log(question.get('question'));

for (const [key, val] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${val}`);
  }
}

const answer = 3; // +prompt('Your answer');
// console.log(question.get(question.get('correct') === answer));

// Conver map to array:
console.log([...question]);

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('closed', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));

rest.set([1,2], 'Test') 

console.log(rest);

const ordersSet = new Set([
  'Pizza',
  'Pasta',
  'Pizza',
  'Pasta',
  'Pizza',
  'Pasta',
]);

console.log(ordersSet);

// Example:
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size,
);

// Property NAMES:
const properties = Object.keys(openingHours);

let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}

console.log(openStr);

// Property VALUES:
const values = Object.values(openingHours);
console.log(values);

// Entire object:
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}



// Optional Chaining

if (restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods:
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderPizza?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'John', email: 'hello@jonas.io' }];

console.log(users[0]?.name ?? 'User array empty');

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const [idx, el] of menu.entries()) {
  console.log(`${idx + 1}: ${el}`);
}

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// * OR assignment operator.
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// * Nullish assignment operator. (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);


restaurant.numGuests = 0;
const guest = restaurant.numGuests || 10;
console.log(guest);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);


// * 1) Destructuring:
// ! SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// ! REST, because on LEFT side of =
const [a, b, ...other] = [1, 2, 3, 4, 5];

console.log(a, b, other);

// Objects:
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// * 2) Functions:

const add = function (...numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(2, 4, 5, 3, 7, 6, 12, 7, 9);

const x = [34, 55, 123, 4];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

const arr = [7, 8, 9];
const newArray = [1, 2, ...arr];
console.log(newArray);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array:
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays:
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// ! Iterables: arrays, strings, maps, sets. NOT objects.
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

const ingredients = ['a', 'b', 'c'];

restaurant.orderPasta(...ingredients);

// Objects:
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);


// Destructuring Objects:
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  starterIndex: 1,
  mainIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const { name: restourantName, openingHours: hours, categories: tags } = restaurant;
console.log(restourantName, hours, tags);

// Default values:
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables:

let a = 111;
let b = 999;
const obj = { a: 23, b: 4, c: 13 };
({ a, b } = obj);
console.log(a, b);

// Nested objects:
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

const arr = [2, 3, 4];
const [a, b, c] = arr;

console.log(a, b, c);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables:
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring:
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;

console.log(i, j, k);

// Default values:
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
