// Greeting a User

/*Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

Examples:

What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?*/

const READLINE = require('readline-sync');

let name = READLINE.question('What is your name? ');

if (name.includes("!")) {
  console.log(`Hello ${name}. Why are we screaming?`.toUpperCase())
} else console.log(`Hello ${name}.`);
