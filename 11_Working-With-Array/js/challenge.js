'use strict';

// const getAgeDogs = function (arr1, arr2) {
//   const arrJulia = arr1;
//   const arrKate = arr2;
//   const copyJulia = arrJulia.slice(1, -2);

//   const allDogs = [...copyJulia, ...arrKate];

//   allDogs.forEach(function (age, idx) {
//     if (age < 3) {
//       console.log(`Dog number ${idx + 1} is still a puppy`);
//     } else {
//       console.log(`Dog number ${idx + 1} is an adult, and is ${age} years old`);
//     }
//   });
// };

// getAgeDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// Challenge #2:

// const convertDogInHuman = DATA1.map((age) => {
//   return age <= 2 ? 2 * age : 16 + age * 4;
// });

// const filteredAge = convertDogInHuman.filter((el) => el > 18);

// const averageAge = filteredAge.reduce(
//   (acc, age, _, arr) => (acc + age) / arr.length,
//   0,
// );

// const DATA1 = [5, 2, 4, 1, 15, 8, 3]; // 44
// const DATA2 = [16, 6, 10, 5, 6, 1, 4]; // 47.3

// const func = (arr) => {
//   const tempArr = [];

//   const sum = arr.reduce((acc, age) => {
//     if (age * 2 <= 4) return acc;

//     tempArr.push(16 + age * 4);
//     // console.log(tempArr);
//     return acc + (16 + age * 4);
//   }, 0);

//   return sum / tempArr.length;
// };

// console.log(func(DATA2));

// console.log((36 + 32+ 76+ 48+ 28)/ 5)

// Challenge #4.

// TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// 2.
const dogSarah = dogs.find((dog) => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eatinhg ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }`,
);

// 3.
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);
// console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);
// console.log(ownersEatTooLittle);

// 4.
// console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat to much!`);
// console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat to little!`);

// 5.
// console.log(dogs.some((dog) => dog.curFood === dog.recFood)); // false

// 6.
const checkEatOk = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatOk)); // true

// 7.
console.log(dogs.filter(checkEatOk));

// 8.
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
