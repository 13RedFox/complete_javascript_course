'use strict';

// * Challenge #1

// const calcAverage = (scoreA, scoreB, scoreC) => (scoreA + scoreB + scoreC) / 3;

// const teamDolphinsDataOne = calcAverage(44, 23, 71);
// const teamKoalasDataOne = calcAverage(65, 54, 49);

// const teamDolphinsDataTwo = calcAverage(85, 54, 41);
// const teamKoalasDataTwo = calcAverage(23, 34, 27);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
//   } else {
//     console.log('No one wins');
//   }
// };

// checkWinner(teamDolphinsDataOne, teamKoalasDataOne);
// checkWinner(teamDolphinsDataTwo, teamKoalasDataTwo);

// * Challenge #2

// const calcTip = function (value) {
//   if (value <= 300 && value >= 50) {
//     return value * 0.15;
//   } else {
//     return value * 0.2;
//   }
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(calcTip(100));
// console.log(tips);
// console.log(total);

// * Challenge #3

// const mark = {
//   firstName: 'Mark',
//   lastName: 'Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   mass: 99,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.firstName} ${mark.lastName}'s BMI (${mark.calcBMI().toFixed(1)}) is higher than ${
//       john.firstName
//     } ${john.lastName}'s (${john.calcBMI().toFixed(1)})`,
//   );
// } else {
//   console.log(
//     `${john.firstName} ${john.lastName}'s BMI (${john.calcBMI().toFixed(1)}) is higher than ${
//       john.firstName
//     } ${mark.lastName}'s (${mark.calcBMI().toFixed(1)})`,
//   );
// }

// * Challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (value) {
  if (value <= 300 || value >= 50) {
    return value * 0.15;
  } else {
    return value * 0.2;
  }
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(calcTip(bills[i]) + bills[i]);
}

console.log(tips);
console.log(totals);

// ! BONUS:
const calcAverage = (value) => {
  let sum = 0;

  for (let i = 0; i < value.length; i++) {
    sum += value[i];
  }

  return (sum / value.length).toFixed(1);
};

console.log(calcAverage(totals));
