//Tip Calculator

/* 5. Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers. */

const READLINE = require('readline-sync');

console.log('What is the bill amount?');
let bill = READLINE.prompt();

console.log('What is the tip percentage?');
let tipPercentage = READLINE.prompt();

if (tipPercentage > 1) {
  tipPercentage = tipPercentage / 100;
}

let tip = bill * tipPercentage;

let total = Number(bill + tip);

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);

