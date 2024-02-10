/*create a rock paper scissors lizard spock game 
  make a function that asks the user a question 
  welcome message.
  make your pick
  set computer choice to a random pick. 
  compare the two and output a winner or tie. 
  to make the best of 5, sotre the # of rounds in an object that has key value of player # computer #. sum values up. 
  offer a choice to input an abbreviated version of choice. 
  make sure to send message if user puts wrong inpur or no input. */

const READLINE = require('readline-sync');
const CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock', 'r', 'p', 'sc', 'l', 'sp'];
const ROUNDS = [1, 3, 5, 7];
function prompt(message) {
  console.log(message);
}

prompt(`Welcome to Lizard Spock! How many rounds would you like to play? Choose 1, 3, 5, or 7.`);
let numberOfRounds = Number(READLINE.question());

while (!ROUNDS.includes(numberOfRounds)) {
  prompt(`Please enter a valid choice(1, 3, 5, 7).`);
  numberOfRounds = Number(READLINE.question());
}

let playerWins = [];
let computerWins = [];

function addWin(winner) {
  winner.push('win');
}

function displayWinner(playerChoice, computerChoice) {
  prompt(`You chose ${playerChoice} and the computer chose ${computerChoice}.`);

  if (((playerChoice === 'rock') && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
      ((playerChoice === 'paper') && (computerChoice === 'rock' || computerChoice === 'spock')) ||
      ((playerChoice === 'scissors') && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
      ((playerChoice === 'lizard') && (computerChoice === 'paper' || computerChoice === 'spock')) ||
      ((playerChoice === 'spock') && (computerChoice === 'rock' || computerChoice === 'scissors'))) {
        prompt('You win!');
        addWin(playerWins);
      } else if (((computerChoice === 'rock') && (playerChoice === 'scissors' || playerChoice === 'lizard')) ||
      ((computerChoice === 'paper') && (playerChoice === 'rock' || playerChoice === 'spock')) ||
      ((computerChoice === 'scissors') && (playerChoice === 'paper' || playerChoice === 'lizard')) ||
      ((computerChoice === 'lizard') && (playerChoice === 'paper' || playerChoice === 'spock')) ||
      ((computerChoice === 'spock') && (playerChoice === 'rock' || playerChoice === 'scissors'))) {
        prompt(`Computer wins!`);
        addWin(computerWins);
      } else {prompt(`It's a tie!`);
              counter -= 1;
      }
}


let counter = 0;

while (counter < numberOfRounds) {
  prompt(`Choose one: ${CHOICES.slice(0,5).join(', ')}.\nFor abbreviated version type r, p, sc, l, or sp respectively.`);
let playerChoice = READLINE.question().toLowerCase();

while (!CHOICES.includes(playerChoice)) {
  prompt(`Please enter a valid choice.`);
  playerChoice = READLINE.question().toLowerCase();
}

let randomChoice = Math.floor(Math.random() * CHOICES.slice(0,5).length);
let computerChoice = CHOICES.slice(0,5)[randomChoice].toLowerCase();

if (playerChoice === 'r') {
  playerChoice = 'rock';
} else if (playerChoice === 'p') {
  playerChoice = 'paper';
} else if (playerChoice === 'sc') {
  playerChoice = 'scissors';
} else if (playerChoice === 'l') {
  playerChoice = 'lizard';
} else if (playerChoice === 'sp') {
  playerChoice = 'spock';
} else if (computerChoice === 'p') {
  computerChoice = 'paper';
} else if (computerChoice === 'sc') {
  computerChoice = 'scissors';
} else if (computerChoice === 'l') {
  computerChoice = 'lizard';
} else if (computerChoice === 'sp') {
  computerChoice = 'spock';
}

displayWinner(playerChoice, computerChoice);
counter += 1;
}

if (playerWins.length > computerWins.length) {
  prompt(`You've won best out of ${numberOfRounds} with ${playerWins.length} wins!!`);
} else prompt(`You've lost the best out of ${numberOfRounds}.`);
 
