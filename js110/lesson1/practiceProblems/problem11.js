// Create an object that expresses the frequency with which each letter occurs in this string:

let statement = "The Flintstones Rock";
let statementFrequency = {};
// The output will look something like the following:

// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

statement = statement.replaceAll(' ','').split('');

for (let i of statement) {
  statementFrequency[i] = statementFrequency[i] ? statementFrequency[i] + 1 : 1;
}

console.log(statementFrequency);

/* LS Answer (there are 2 more that i can reference but this made the most sense to me)

let charsInStatement = statement.split('').filter(char => char !== ' ');
let result = {};

charsInStatement.forEach(char => {
  if (Object.keys(result).includes(char)) {
    result[char] += 1;
  } else {
    result[char] = 1;
  }
}); */