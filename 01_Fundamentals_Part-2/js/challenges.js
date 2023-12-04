'use strict';

// * Challenge #1

const calcAverage = (scoreA, scoreB, scoreC) => (scoreA + scoreB + scoreC) / 3;

const teamDolphinsDataOne = calcAverage(44, 23, 71);
const teamKoalasDataOne = calcAverage(65, 54, 49);

const teamDolphinsDataTwo = calcAverage(85, 54, 41);
const teamKoalasDataTwo = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
  } else {
    console.log('No one wins');
  }
};

checkWinner(teamDolphinsDataOne, teamKoalasDataOne);
checkWinner(teamDolphinsDataTwo, teamKoalasDataTwo);
