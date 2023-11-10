'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log((document.querySelector('.guess').value = 23));
*/

/*
// GUESS MY NUMBER --> ADIVINA MI NÚMERO.

//define variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const display = function (classChange, valueChange) {
  document.querySelector(classChange).textContent = valueChange;
};

// Create new function for displayMessage
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Button Again! challenge #1.
// Implement a game rest funtionality, so that the player can make a new guess! here is how.

// Select the element with the 'again' class and attach a click event handler.
document.querySelector('.again').addEventListener('click', function () {
  // In the handler function, restore initail values of the score and secret number variables.
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Restore the initial conditions of the message, number, score and guess input field.

  //   document.querySelector('.message').textContent = 'Start guessing...';
  display('.message', 'Start guessing...');

  //   document.querySelector('.number').textContent = '?';
  display('.number', '?');

  //   document.querySelector('.score').textContent = score;
  display('.score', score);

  document.querySelector('.guess').value = '';

  // Also restore the original background color (#222) and number width (15rem).
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//event Listener
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no imput --> cuando no hay entrada.
  if (!guess) {
    // document.querySelector('.message').textContent = '💣No number';
    display('.message', '💣No number');
  } else if (guess < 0 || guess > 20) {
    // document.querySelector('.message').textContent = '🚫invalid Number';
    display('.message', '🚫invalid Number');

    // When player wins  --> cuando el jugador gana.
  } else if (guess === secretNumber) {
    // document.querySelector('.number').textContent = secretNumber;
    display('.number', secretNumber);
    // document.querySelector('.message').textContent = '🎲Correct Number';
    display('.message', '🎲Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      //   document.querySelector('.highscore').textContent = highScore;
      display('.highscore', highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent = guess > secretNumber ? '📈 too high!' : '📈 too low!';
      display(
        '.message',
        guess > secretNumber ? '📈 too high!' : '📈 too low!'
      );
      score--;
      //   document.querySelector('.score').textContent = score;
      display('.score', score);
    } else {
      //   document.querySelector('.message').textContent = '💣You Lost the game.!';
      display('.message', '💣You Lost the game.!');
      //   document.querySelector('.score').textContent = 0;
      display('.score', 0);
    }
  }

  /*
    // When guess is too high --> cuando la conjetura es demasiado alta.
    else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💣You Lost the game.!';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too low --> cuando la conjetura es demasiado baja.
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💣You Lost the game.!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
*/

// GUESS MY NUMBER --> ADIVINA MI NÚMERO.

//define variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Create function for changeLabels.
const display = function (classChange, valueChange) {
  document.querySelector(classChange).textContent = valueChange;
};

// Button Again! challenge #1.
// Implement a game rest funtionality, so that the player can make a new guess! here is how.

// Select the element with the 'again' class and attach a click event handler.
document.querySelector('.again').addEventListener('click', function () {
  // In the handler function, restore initail values of the score and secret number variables.
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Restore the initial conditions of the message, number, score and guess input field.
  display('.message', 'Start guessing...');
  display('.number', '?');
  display('.score', score);
  document.querySelector('.guess').value = '';

  // Also restore the original background color (#222) and number width (15rem).
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});

//event Listener
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no imput --> cuando no hay entrada.
  if (!guess) {
    display('.message', '💣No number');
  } else if (guess < 0 || guess > 20) {
    display('.message', '🚫invalid Number');

    // When player wins  --> cuando el jugador gana.
  } else if (guess === secretNumber) {
    display('.number', secretNumber);
    display('.message', '🎲Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      display('.highscore', highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      display(
        '.message',
        guess > secretNumber ? '📈 too high!' : '📈 too low!'
      );
      score--;
      display('.score', score);
    } else {
      display('.message', '💣You Lost the game.!');
      display('.score', 0);
    }
  }
});
