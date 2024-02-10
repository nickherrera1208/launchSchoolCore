// ddaaiillyy ddoouubbllee

/* Write a function that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

Examples:

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // "" */

function crunch(string) {
  let index = 0;
  let arrString = string.split('');
  let newArr = [];
  while(index < arrString.length) {
    if (arrString[index] !== arrString[index + 1]) {
      newArr.push(arrString[index]);
    }
    index++;
  }
  return newArr.join('');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));   
