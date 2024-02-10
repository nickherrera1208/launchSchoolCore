//How big is the room?

/* 4. Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input. */

const READLINESYNC = require('readline-sync');

console.log('What is the length in meters? ');
let lengthInMeters = READLINESYNC.prompt();

console.log('What is the width in meters?')
let widthInMeters = READLINESYNC.prompt();

let squareMeters = lengthInMeters * widthInMeters;
let squareFeet = squareMeters * 10.7639;

return console.log(`The area of the room is ${squareMeters} meters squared or ${squareFeet.toFixed(2)} feet squared.`);