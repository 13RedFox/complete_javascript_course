'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never to this:
  // this.calcAge = function() {
  //   console.log(2037 - this.birthYear);
  // }
};

const jonas = new Person('John', 1991);

// 1. New {} is created
// 2. function is called, this === {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2013);
const jack = new Person('Jack', 2018);

// Prototypes:
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

// Challenge #1.

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const bmw = new Car('BMW', 100);
const mercedes = new Car('Mercedes', 130);

Car.prototype.accelerate = function () {
  console.log(`${this.make} is going at ${this.speed + 10} km/h`);
};

Car.prototype.brake = function () {
  console.log(`${this.make} is going at ${this.speed - 10} km/h`);
};

bmw.accelerate();
*/

// ES6 Classes:

// class expression:
// const PersonCl = class {};

// class declaration:
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to prototype property.
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`); // Hey Jessica
  }

  // Static method:
  static hey() {
    console.log('Hey there...');
  }
}

const jessica = new PersonCl('Jessica', 1996);
jessica.calcAge();

// jessica.__proto__ === PersonCl.prototype

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`); // Hey Jessica
// };
jessica.greet();

// 1. Classes are NOT hoisted.
// 2. Class are first-class citizes.
// 3. Classes are executed in strict mode.

const account = {
  owner: 'jonas',
  movements: [200, 540, 310, 590],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

// console.log(account.latest);
account.latest = 50;
// console.log(account.movements);
