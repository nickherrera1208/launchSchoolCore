// Always Return Negative

/* Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.

Examples:

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0 */

function negative(number) {
  if (number > 0) {
    return number - (number *2);
  } else if (number === 0) {
    return -0;
  } else return number;
}

console.log(negative(-3));    // -3
console.log(negative(5));     // -5
console.log(negative(0));     // -0

/* LS Answer

function negative(number) {
  return Math.abs(number) * -1;
} */