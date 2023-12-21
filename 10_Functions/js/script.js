'use strict';

const bookings = [];

/*
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  // console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
*/

/*
const flight = 'LH234';
const john = {
  name: 'John',
  passport: 234783743,
};

const checkIn = function (flightNum = 'LH999', passenger) {
  passenger.name = `Mr. ${passenger.name}`;

  if (passenger.passport === 234783743) {
    console.log('Checked in.');
  } else {
    console.log('Wrong passport.');
  }
};

checkIn(flight, john);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};

newPassport(john);
checkIn(flight, john);
*/

/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str, fn) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function:
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time.
const high5 = function () {
  console.log('🏆');
};

['John', 'Samanta', 'Alex'].forEach(high5);
*/

/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Alex');

greet('Hello')('Alex');

// Challenge:

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArr('Hello')('Smith..');

*/

/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`,
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(293, 'Alex Smith');
lufthansa.book(391, 'John Doe');

const eurowings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Call method:
book.call(eurowings, 23, 'Sarah Williams');

book.call(lufthansa, 13, 'Mary Cooper');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

// Apply method:
const fligthData = [583, 'George Cooper'];
book.apply(swiss, fligthData);

book.call(swiss, ...fligthData);

console.log(swiss);
*/
