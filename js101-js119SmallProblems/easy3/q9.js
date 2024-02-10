// Clean up the words

/* Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).

Example:

cleanUp("---what's my +*& line?");    // " what s my line " */

function cleanUpWords(string) {
  let regex = /^[a-zA-Z]+$/;
  let newString = '';

  for( let i = 0; i < string.length; i++) {
    if ((regex.test(string[i]) === true) || (string[i] === "'")) {
      newString += string[i];
      } else if ((regex.test(string[i]) === false) && (string[i] === ' ')) {
        newString += string[i];
      } 
    }
    newString = ' ' + newString.split(/[" "']/).filter(element => element !== '').join(' ') + ' ';
    
    return newString;
  }
  
console.log(cleanUpWords("---what's my +*& line?")); 

/* LS Answers
option 1: 

function cleanUp(text) {
  let cleanText = '';

  for (let idx = 0; idx < text.length; idx += 1) {
    if (isLowerCaseLetter(text[idx]) || isUpperCaseLetter(text[idx])) {
      cleanText += text[idx];
    } else if (idx === 0 || lastChar(cleanText) !== ' ') {
      cleanText += ' ';
    }
  }

  return cleanText;
}

function lastChar(text) {
  return text[text.length - 1];
}

function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}

option 2:

function cleanUp(text) {
  return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
} */