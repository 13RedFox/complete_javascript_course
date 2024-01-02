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
