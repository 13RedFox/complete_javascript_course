'use strict';

/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1991 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
    }

    console.log(millenial);
  }

  printAge();
  return age;
}

const firstName = 'John';
calcAge(1991);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAge(1991);

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(2037 - this.year);

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`), // undefined, this.firstName === window.firstName
};

jonas.calcAge();

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const a = { age: 18 };
const aCopy = Object.assign({}, a);
aCopy.age = 20;
aCopy.year = 2037;

console.log(a, aCopy);
*/
