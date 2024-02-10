const READLINE = require('readline-sync');
const CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`==> ${message}`);
}

function winner(playersChoice, computerChoice) {
  prompt(`You chose ${playersChoice} and the computer chose ${computerChoice}.`);

  if ((playersChoice === 'rock' && computerChoice === 'paper') || 
      (playersChoice === 'paper' && computerChoice === 'scissors') ||
      (playersChoice === 'scissors' && computerChoice === 'rock')) {
        prompt(`Computer wins!`);
  } else if ((playersChoice === 'paper' && computerChoice === 'rock') || 
            (playersChoice === 'scissors' && computerChoice === 'paper') ||
            (playersChoice === 'rock' && computerChoice === 'scissors')) {
              prompt(`You win!`); 
  } else prompt(`It's a tie!`);
}
let answer;

while (answer != 'n') {
  prompt(`Choose ${CHOICES.join(',')}.`);
  let playersChoice = READLINE.question();

  while (!CHOICES.includes(playersChoice)) {
    prompt(`Please choose rock, paper, or scissors.`);
    playersChoice = READLINE.question();
  }

  let randomIndex = Math.floor(Math.random() * CHOICES.length);
  let computerChoice = CHOICES[randomIndex];

  winner(playersChoice, computerChoice);

  prompt(`Would you like to play again? Enter y for yes and n for no.`);
  answer = READLINE.question();

  let playAgain = ['y', 'n'];
  while (!playAgain.includes(answer)) {
    prompt(`Please enter y or n.`);
    answer = READLINE.question();
    }
}

prompt(`Thanks for playing!`);

 






