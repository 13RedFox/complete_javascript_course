'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Challenge #1:
/*
// 1)
const [players1, players2] = game.players;

// 2)
const [gk, ...fieldPlayers] = players1;

// 3)
const allPlayers = [...players1, ...players2];

// 4)
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perscic'];

// 5)
const {
  odds: { team1, x: draw, team2 },
} = game;

// 6)
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

// 7)
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

// Challenge #2:

// 1)
for (const [idx, value] of game.scored.entries()) {
  console.log(`Goal ${idx + 1}: ${value}`);
}

// 2)
let res = 0;

for (const key of Object.values(game.odds)) {
  res += key;
}

console.log((res / Object.values(game.odds).length).toFixed(2));

// 3)
for (const [team, val] of Object.entries(game.odds)) {
  console.log(`Odd of victory ${game?.[team] ?? 'draw'}: ${val}`);
}

*/
