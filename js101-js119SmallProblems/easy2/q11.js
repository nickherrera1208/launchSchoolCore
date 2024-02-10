// Get Middle Character 

/* Write a function that takes a non-empty string argument and returns the middle character(s) of the string. If the string has an odd length, you should return exactly one character. If the string has an even length, you should return exactly two characters.

Examples:

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x" */

function centerOf(string) {
  let index = Math.ceil(string.length / 2);

  if ((string.length >= 1) && (string.length % 2 !== 0)) {
    console.log(string[index -1]);
  } else if((string.length >= 1) && (string.length % 2 == 0)) {
    console.log( string.slice(index -1, index + 1));
  } else console.log( 'Please enter a valid string.');
  }

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x" */

