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
console.log(jonas);

// 1. New {} is created
// 2. function is called, this === {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2013);
const jack = new Person('Jack', 2018);
console.log(matilda, jack);
