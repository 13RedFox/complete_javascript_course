'use strict';

const getAgeDogs = function (arr1, arr2) {
  const arrJulia = arr1;
  const arrKate = arr2;
  const copyJulia = arrJulia.slice(1, -2);

  const allDogs = [...copyJulia, ...arrKate];

  allDogs.forEach(function (age, idx) {
    if (age < 3) {
      console.log(`Dog number ${idx + 1} is still a puppy`);
    } else {
      console.log(`Dog number ${idx + 1} is an adult, and is ${age} years old`);
    }
  });
};

getAgeDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
