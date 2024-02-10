// let myVar = 1;

// function myFunc(myVar) {
//   myVar = 2;
// }

// myFunc();
// console.log(myVar); // 1

// study session question 1.
// let pets = {
//   jerry: {species: "cat", age: 3},
//   luna: {species: "dog", age: 5},
//   goldin: {species: "fish", age: 1}
// };

// function flattenObj(animals) {
//   let pets = Object.keys(animals);

//   for (let idx in pets) {
//     animals[pets[idx]] = animals[pets[idx]].species;
//   }
// }

// flattenObj(pets);
// console.log(pets);

// 2. When using {}, it must have a return statement otherwise the output will be undefined. 
// const emphasize = str => {str + "!!!"};

// let word = emphasize("Hello");
// // console.log(word);
// if (word) {
//   console.log(word);
// } else {
//   console.log("Goodbye");
// }

// let pets = ["dog", "fish", "parrot"];
// let myPets = pets;
// console.log(myPets === pets);

// console.log('2' + '2'); 
// console.log('2' - '2'); 
// console.log('2' / '2');
// console.log('2' * 'A');
// console.log('2' + 2); 
// console.log(2 + '2'); 

// let item = '2' * 4;
// console.log(item , typeof item);

// // if js sees a + and a string, it will try tor coerce other values to string. 

// console.log(1 < 2 && 3 < 4); //true
// console.log(1 > 2 || 3 > 4); // false
// console.log(1 > 2 && undefined.length); // false
// console.log(1 < 2 || undefined.length); // true

// console.log(1 < 2 && 3 > 4); // false
// console.log(1 < 2 || 3 > 4); //true
// console.log(1 > 2 || 3 < 4); //true

// hello = val => "Hello " + val;
// console.log(hello('hi'));

// let x; 
// x = 8; 
// x = x + ""; 
// // X will convert into string because + operator is present with a string. 
// console.log(x, typeof x); 
// x = x - 2; 
// console.log(x, typeof x); 

// let myVar = {1: 'a'};

// function myFunc(myVar) {
//   myVar[1] = 2;
// }

// myFunc(myVar);
// console.log(myVar); // 1

// using const for objects and mutating them

//whenever using variable in an object. 

// let a = 'blue';
// let colors = ['red', a, 'yellow'];
// a = 'black';
// console.log(colors);