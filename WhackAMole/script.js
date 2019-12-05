const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const startButton = document.querySelector('.startButton');

// Variables & Constants
let lastHole;
let timeUp = false;
let score = 0;
let PLAYING_DURATION = 10000;

// Pick a random amount of time:
function randomTime(min, max) {
  // Choose a number between min and max values
  return Math.round(Math.random() * (max - min) + min);
}

// Selecting a random hole
function randomHole(holes) {
  // Randomize an index from holes length
  const index = Math.floor(Math.random() * holes.length);
  // Then picks a hole from holes array
  const hole = holes[index];
  // Verify if it's the same hole
  if (hole === lastHole) {
    console.log("Same hole buddy, run again");
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  // calls a random time between 200 and 1000 milliseconds
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    // if time is NOT up
    if (!timeUp) {
      // Calls peep();
      peep();
    }
  }, time);
}

function startGame() {
  clearGreetings();
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  // calls peep() to start randomize things
  peep();
  // When reaches playing duration, time will be up
  setTimeout(() => {
    timeUp = true 
    greetings();
  }, PLAYING_DURATION);
}

function bonk(e) {
  if (!e.isTrusted) return;   // Cheater identified
  score++;
  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
}
// When clicking on the mole
moles.forEach(mole => mole.addEventListener('click', bonk));

// Button start listener
startButton.addEventListener('click', startGame);

// EXTRA
const congrats = document.querySelector('.congratulations');

function greetings() {
  // If there are greetings
  if (congrats.innerHTML === '') {
    congrats.innerHTML = `
      <h1>Congrats!</h1>
      <h3>You found ${score} moles this time!</h3>
    `;
  } else {
    congrats.innerHTML = ``;
  }
}

function clearGreetings() {
  // Just clears the HTML element of 'greetings'
  congrats.innerHTML = ``;
}