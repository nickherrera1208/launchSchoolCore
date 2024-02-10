// Short Long Short

/* 7. Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths. */

function shortLongShort(word1, word2) {
  if (word1.length < word2.length) {
    return word1 + word2 + word1;
  } else return word2 + word1 + word2;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"