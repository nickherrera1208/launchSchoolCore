// When Will I Retire?

/* Build a program that logs when the user will retire and how many more years the user has to work until retirement.

Example:

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go! */

const READLINE = require('readline-sync');

let age = READLINE.question('What is your age? ');
let retirementAge = READLINE.question('What age would you like to retire? ');

let date = new Date();
let year = date.getFullYear();
let retirementYear = year + (retirementAge - age);

console.log(`It's ${year}. You will retire in ${retirementYear}.\nYou only have ${retirementAge - age} years of work to go!`);

