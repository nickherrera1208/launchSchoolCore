// Stringy Strings

/* Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. The length of the string should match the given integer.

Examples:

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101" */

function onesZerosString(positiveNumber) {
  let onesAndZeros = '';
  let oneToConcat = '1';
  let zeroToConcat = '0';

  while (onesAndZeros.length < positiveNumber) {
    if (onesAndZeros.length % 2 === 0) {
      onesAndZeros += oneToConcat;
    } else onesAndZeros += zeroToConcat;
  }
  return onesAndZeros;
}

console.log(onesZerosString(6));    // "101010"
console.log(onesZerosString(9));    // "101010101"
console.log(onesZerosString(4));    // "1010"
console.log(onesZerosString(7));    // "1010101" */

/*LS Answer

function stringy(size) {
  let result = "";
  for (let idx = 0; idx < size; idx++) {
    let number = ((idx % 2) === 0) ? 1 : 0;
    result += number;
  }
  return result;
}; */