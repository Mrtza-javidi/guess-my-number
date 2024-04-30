'use strict';
// Elements
const check = document.querySelector('.check');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const body = document.querySelector('body');
const scoreElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.highscore');
const again = document.querySelector('.again');
const number = document.querySelector('.number');
// 1- determine a random number that is the win number
let winNumber = Math.floor(Math.random() * 20) + 1;
// 6- specify a variable that keeps the score and the current score
let score = 20;
let currentScore = 0;
// 2- determine the click event of the check button
check.addEventListener('click', () => {
  // 3- get the input value and check if it equals to the win number
  const guessNumber = Number(guess.value);
  // 4- check if the guess number is equaled to win number
  if (guessNumber === winNumber) {
    message.textContent = '🎉 Correct Number!';
    body.style.backgroundColor = '#60b347';
    // 9- show this correct guess number in the number element
    number.textContent = guessNumber;
    // 8- check if te score is less or equal to the current score, if so, put it in the current score and then, show it in the highscore element
    if (score >= currentScore) {
      currentScore = score;
      highScoreElement.textContent = currentScore;
    }
  } else wrongGuessNumber(guessNumber);

  if (score === 0) {
    message.style.color = 'red';
    message.textContent = 'Game Over!💔';
    guess.setAttribute('readonly', '');
    check.setAttribute('disabled', '');
  }
});
// 5- check the statements of inequality of the guess and win number
function wrongGuessNumber(guess) {
  if (guess < 1) {
    message.textContent = `Out of range!😬`;
  } else if (guess > 20) {
    message.textContent = `Out of range!😬`;
  } else if (guess > winNumber + 2) {
    message.textContent = `it's too higher😥`;
  } else if (guess > winNumber) {
    message.textContent = `it's higher☹️`;
  } else if (guess < winNumber - 2) {
    message.textContent = `it's too lower😥`;
  } else if (guess < winNumber) {
    message.textContent = `it's lower☹️`;
  }
  // 7- reduce the score 1 time, then show it in the score element
  --score;
  scoreElement.textContent = score;
}
// 10- Reset the necessary sections in order to restart the game
again.addEventListener('click', () => {
  restart();
});

function restart() {
  score = 20;
  scoreElement.textContent = score;
  body.style.backgroundColor = '#222';
  message.textContent = 'Start guessing...';
  message.style.color = '#eee';
  guess.value = '';
  guess.removeAttribute('readonly', '');
  number.textContent = '?';
  check.removeAttribute('disabled', '');
  winNumber = Math.floor(Math.random() * 20) + 1;
}
