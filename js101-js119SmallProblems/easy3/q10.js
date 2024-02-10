// What Century is That?

/* Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.

Examples:

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th" */

function century(year) {
  let century;
  if (year % 100 !== 0) {
    century = String(parseInt(year / 100) + 1);
  } else century = String(year / 100);

  let lastElement = century[century.length - 1];
  let secondToLastElement = century[century.length - 2];
  let length = century.length;

  if (lastElement === '1' && secondToLastElement !== '1') {
    century += 'st';
  } else if (lastElement === '2' && secondToLastElement !== '1') {
    century += 'nd';
  } else if (lastElement === '3' && secondToLastElement !== '1') {
    century += 'rd';
  } else century += 'th';

  return century;
}

console.log(century(2000));
console.log(century(2001));
console.log(century(1965));
console.log(century(256));
console.log(century(5));
console.log(century(10103));
console.log(century(1052));
console.log(century(1127));
console.log(century(11201));
console.log(century(10203));
console.log(century(123));

/* LS Answers

function century(year) {
  let centuryNumber = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    centuryNumber -= 1;
  }

  return String(centuryNumber) + centurySuffix(centuryNumber);
}

function centurySuffix(centuryNumber) {
  if (catchWithTh(centuryNumber % 100)) {
    return 'th';
  }

  let lastDigit = centuryNumber % 10;
  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function catchWithTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
} */