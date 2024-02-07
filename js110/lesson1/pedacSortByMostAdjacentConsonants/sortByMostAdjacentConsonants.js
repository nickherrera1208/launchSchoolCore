function sortStringsByConsonants(strings) {
  let stringsCopy = strings.slice()

  let sortedStrings = stringsCopy.sort((a, b) => {
    return countMaxAdjacentConsonants(b) -
           countMaxAdjacentConsonants(a);
  });

  return sortedStrings;
}

function countMaxAdjacentConsonants(word) {
  word = word.replaceAll(' ','');

  let str = '';
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    let letter = word[i];

    if ('bcdfghjklmnpqrstvwxyz'.includes(letter)) {
      str += letter;

      if (str.length > 1 && str.length > count) {
        count = str.length;
      }
    } else {
      str = ''; 
    }
  }

  return count;
}

let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']

// let a = 'aa  p pl pl pl ';
// a = a.replaceAll(" ", "");
// console.log(a);