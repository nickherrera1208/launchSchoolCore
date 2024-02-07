function doubleOddNumbers(numbers) {
  numArray = [];
  for (let i = 0; i < numbers.length; i++) {
    numArray.push(numbers[i]);

    if (numArray[i] % 2 !== 0) {
      numArray[i] = numArray[i] * 2;
    } 
  }
  return numArray;
}

let myNumbers = [1, 4, 3, 7, 2, 6];

console.log(doubleOddNumbers(myNumbers));
console.log(myNumbers);

/* LS Answer

function doubleNumsWithOddIndices(numbers) {
  let doubledNums = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNumber = numbers[counter];

    if (counter % 2 === 1) {
      doubledNums.push(currentNumber * 2);
    } else {
      doubledNums.push(currentNumber);
    }
  }

  return doubledNums;
} */