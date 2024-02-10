// Arithmetic Integer

/* Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.

Example:

==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23 */

const READLINE = require('readline-sync');

console.log('==> Enter the first number:');
let firstNumber = READLINE.prompt();

console.log('==> Enter the second number:');
let secondNumber = READLINE.prompt();

operationsArray = ['+', '-', '*', '/', '%', '**'];

function logOperations() {
  for (let i = 0; i < operationsArray.length; i++) {
    console.log(`==> ${firstNumber} ${operationsArray[i]} ${secondNumber} = ${eval(firstNumber + operationsArray[i] + secondNumber)}`);
  }
}

logOperations();