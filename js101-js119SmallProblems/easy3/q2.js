// Bannerizer

/* Write a function that will take a short line of text, and write it to the console log within a box.

Examples:

logInBox('To boldly go where no one has gone before.');

will log on the console:

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+

You may assume that the output will always fit in your browser window. */

function logInBox(string) {
  let plusline = '+---';
  let barLine = '|   ';
  let lengthToAdd = string.length;
  let counter = 0;

  while(counter < lengthToAdd) {
    plusline += '-';
    barLine += ' ';
    counter++;
  }
  plusline += '+';
  barLine += '|';
  console.log(plusline);
  console.log(barLine);
  console.log(`|  ${string} |`);
  console.log(barLine);
  console.log(plusline);
}

let boldlyGo = 'To boldly go where no one has gone before.';

logInBox(boldlyGo);

/* LS Answer

function logInBox(message) {
  let horizontalRule = `+${"-".repeat(message.length + 2)}+`;
  let emptyLine = `|${" ".repeat(message.length + 2)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
} */