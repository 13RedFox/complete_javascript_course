'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (className, message) {
  document.querySelector(className).textContent = message;
};

const changeBackgroundColorAndSize = function (color, size) {
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.number').style.width = size;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('.message', '⛔️ No number!');
  } else if (guess === secretNumber) {
    displayMessage('.message', '🎉 Correct Number!');
    changeBackgroundColorAndSize('#60b347', '30rem');
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage('.message', guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('.message', '💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  displayMessage('.number', '?');
  displayMessage('.message', 'Start guessing...');
  changeBackgroundColorAndSize('#222', '15rem');
});
