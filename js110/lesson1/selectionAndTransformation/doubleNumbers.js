function doubleNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2;
  }
}

let myNumbers = [1, 4, 3, 7, 2, 6];

doubleNumbers(myNumbers);
console.log(myNumbers);