/* Ask the user for the first number.
   Ask the user fo rthe second number. 
   Ask the use3r for an operation to perform. (addition, subtraction, multiplication, and division)
   Perform the operation on the two numbers. 
   Print the result to the terminal. */

const READLINE = require("readline-sync");

const CONFIG = require("./config.js");

function prompt(message) {
  console.log(`=> ${message}`);
  }

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function calculator() {
  prompt("For english type en. Para español tipo es.")
  var language = READLINE.question();

  prompt(CONFIG.messages[language].welcome);

prompt(CONFIG.messages[language].firstNumber);
let number1 = READLINE.question();

while (invalidNumber(number1)) {
  prompt(CONFIG.messages[language].tryAgain);
  number1 = READLINE.question();
}

prompt(CONFIG.messages[language].secondNumber);
let number2 = READLINE.question();

while (invalidNumber(number2)) {
  prompt(CONFIG.messages[language].tryAgain);
  number2 = READLINE.question();
}

prompt(CONFIG.messages[language].calculationType);
let operation = READLINE.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt(CONFIG.messages[language].operationChoices);
  operation = READLINE.question();
}

let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4': 
    output = Number(number1) / Number(number2);
    break;

}

prompt(CONFIG.messages[language].result + `${output}`); 

prompt(CONFIG.messages[language].moreCalculations);
let anotherCalc = READLINE.question();

if ((anotherCalc === 'yes') || (anotherCalc === 'si')) {
  calculator();
} else prompt(CONFIG.messages[language].thanksForUsing);
}

calculator();


  

