//Sum or Product of Consecutive Integers

/* 6. Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive. */

const READLINE = require('readline-sync');

console.log('Please enter an integer greater than 0:');
let int = READLINE.prompt();

while (int <= 0  || isNaN(int)) {
  console.log('Please enter a valid integer:');
  int = READLINE.prompt();
}

console.log('Enter "s" to compute the sum, or "p" to compute the product.');
let compute = READLINE.prompt().toLowerCase();

while (compute !== 's' && compute !== 'p' || typeof(compute) !== 'string') {
  console.log('Please enter "s" for sum or "p" for product.');
  compute = READLINE.prompt();
}

let sum = 0;
let product = 1;
if (compute === 's') {
  for (let num = 1; num <= int; num++) {
    sum += num;
  }
  console.log(`The sum of the integers between 1 and ${int} is ${sum}`);
} else if (compute === 'p') {
    for (let num = 1; num <= int; num++) {
      product *= num;
  }
  console.log(`The product of the integers between 1 and ${int} is ${product}`);
}