function multiply(numbers, multiplier) {
  let newArray = [];
  for (let i = 0; i < numbers.length; i++) {
    newArray.push(numbers[i] * multiplier);
  }
  return newArray;
}

let myNumbers = [1, 4, 3, 7, 2, 6];

console.log(multiply(myNumbers, 4));
console.log(myNumbers);

