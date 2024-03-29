//Multiples of 3 and 5

/* 10. Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.*/

function multiplesOf3And5(number) {
  let sum = 0;
  for (let num = 1; num <= number; num++) {
    if (num % 3 === 0 || num % 5 === 0) {
      sum += num;
    }
  }
  return sum;
}

console.log(multiplesOf3And5(3));
console.log(multiplesOf3And5(5));
console.log(multiplesOf3And5(10));
console.log(multiplesOf3And5(1000));