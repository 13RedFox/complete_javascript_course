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
