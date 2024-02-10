// JS101 Practice Problems: Easy 1

// Question 1: Will the code below raise an error?

// let numbers = [1, 2, 3];
// numbers[6] = 5;
// // /* No, it will declare empty elements up to the 6th index. When accessing those elements, they will output a value of undefined. */

// console.log(numbers[99]);
// console.log(numbers);
// console.log(typeof numbers[11]);

// Question 2: How can you determine if string ends with exclamation mark?

// let str1 = "   Come over here!    "; // true
// let str2 = "    What's up, Doc!  " ; // false

// console.log(str1.trim()[str1.trim().length - 1] === '!');
// console.log(str2.trim()[str2.trim().length - 1] === '!');

// Question 3: Determine whether the following object of people and their age contains an entry for 'Spot':*/

// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// console.log(ages.hasOwnProperty('Grandpa'));

//  Question 4: Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.)

// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// // => The munsters are creepy and spooky.

// console.log(munstersDescription);

// let newMunsters = munstersDescription[0].toUpperCase() + munstersDescription.toLowerCase().slice(1, );

// console.log(newMunsters);

// Question 5: What will the following code output?

// console.log(false == '0'); //true
// console.log(false === '0'); //false

// console.log(Number(false));

// console.log(false == 'false');


// let arr = [2,3,4];

// function changeArray(localArr) {
//   localArr = [1, 2, 3];
//   localArr.reverse();
//   return localArr;
// } 

// console.log(changeArray(arr));

// console.log(arr);

// Question 6: We have most of the Munster family in our ages object:

// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10, Bob: 2};

// // Add entries for Marilyn and Spot to the object:

// let additionalAges = { Marilyn: 22, Spot: 237 };

// let additionalAges1 = { Nick: 23, Shuka: 20};

// // merge method. 

// // console.log(ages.Nick);

// let ages2 = ages;

// Object.assign(ages, additionalAges, additionalAges1);
// console.log(ages2 === ages);
// ages2.Bob = 100;

// console.log(ages);
// console.log(ages2);

// Question 7: Determine whether the name Dino appears in the strings below -- check each string separately:

// let str1 = "Few things in life are as important as house training your pet dinosaur.";

// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// console.log(str1.includes('Dino'));
// console.log(str2.includes('Dino'));

// let myObj = {a: 1, b: 2, c: () => myObj.a + myObj.b};

// console.log(myObj.c());

/* A function in JavaScript is a set of statements that perform a specific task. It is a block of reusable code that can be invoked by its name.

  Functions in JavaScript can be standalone or part of an object.

  A method is a function that is a property of an object. When a function is associated with an object, it is referred to as a method of that object.

  In other words, a method is a function that is called on a specific object and can access that object's properties. */

// Question 8: How can we add the family pet, "Dino", to the following array?

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

// flintstones.push('Dino');

// console.log(flintstones);

// Question 9: In the previous problem, our first answer added 'Dino' to the array like this:

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones.push("Dino");

//How can we add multiple items to our array? ('Dino' and 'Hoppy')

// Question 10: Return a new version of this sentence that ends just before the word house. Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.

// let advice = "Few things in life are as important as house training your pet dinosaur.";

// // Expected return value:
// // => 'Few things in life are as important as '

// advice = advice.slice(0, advice.indexOf('house'));

// console.log(advice);
//console.log(newAdvice);

// Easy 2 

// Question 1: Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

// let advice = "Few things in life are as important, as house training your pet dinosaur. important.";

// advice = advice.replaceAll('important', 'urgent');

// console.log(advice);

//Shuka Answer
/*let stringArray = advice.split(' ');

stringArray.forEach(function(word) {
  if (word === 'important') {
    advice = advice.replace('important', 'urgent');
  }
});

console.log(advice);*/

//Nick Answer

// while (advice.includes('important')) {
//   advice = advice.replace('important', 'urgent');
// }

// console.log(advice);


// example 1
// let myVar = 1;

// function myFunc() {
//   myVar = 2;
// }

// myFunc();
// console.log(myVar); // 2

//example 2

// let myVar = [1];

// function myFunc() {
//   myVar = [2];
// }

// myFunc();
// console.log(myVar); // [2]

// example 9

// let myVar = [1];

// function myFunc(myVar) {
//   myVar[0] = 2;
// }

// myFunc(myVar);
// console.log(myVar); // [2]

// const COLORS = ['red', 'green', 'blue'];

// let myColors = COLORS;

// myColors.push('pink');

// myColors = ['black', 'brown', 'violet'];

// console.log(myColors);

// console.log(COLORS[3]);

// let a = {a:1, b:2, c:3};
// let b = [1, 2, 3];
// let myVar = 23;

// function change() {
//   myVar = 4;
// }

// change();
// console.log(myVar);

//study session 12/20 w/ seth and kristina

// let myVar = 1;

// function myFunc(myVar) {
//   myVar = 2;
// }

// myFunc();
// console.log(myVar); //1


// if (1 === 1) {
//    a = 'foo';
//   }
  
//   console.log(a);
  // referenceError because a is local. 


// let a = 'foo';
// if (1 === 1) {
//   a = 'bar';
// }

// console.log(a);

// let pets = {
//   jerry: {species: "cat", age: 3},
//   luna: {species: "dog", age: 5},
//   goldin: {species: "fish", age: 1}
// };

// function flattenObj(animals) {
//   let pets = Object.keys(animals);
//   return pets;
  
//   for (let idx in pets) {
//     animals[pets[idx]] = animals[pets[idx]].species;
//   }
// }

// let randomObjects = flattenObj(pets);
// console.log(randomObjects);

// let a = 'blue';
// let colors = ['red', a, 'yellow'];
// a = 'black';
// console.log(colors);

// const emphasize = str => {
//   return str + "!!!"
// };
// let word = emphasize("hello");

// if (word) {
//   console.log(word);
// } else {
//   console.log("Goodbye");
// }

// console.log('2' + '2'); // k: 22, 22
// console.log('2' - '2'); //k: undefined, 0
// console.log('2' / '2'); // k: undefined, 1
// console.log('2' * 'A'); // k: undefined, NaN
// console.log('2' + 2);  // k: 4, 22
// console.log(2 + '2'); // k: 4, 22

// console.log([1, 2, 3] + [4, 5]); // [1, 2, 34, 5] // turns arrays to strings
// // [1, 2, 3, [4, 5]]

// let item = '2' * 4;
// console.log(item , typeof item);

// //snippet 1

// let num = 2.76; // here

// function double() {
//   num *= 2; // here
// }

// double();
// console.log(num); //return 2.76, nothing happens in function. 2.76 * 2

// //snippet 2

// let num2 = 2.76; // here

// function double2(num2) {
//   num2 *= 2; //here 
// }

// double2(); //nothing happens. 

// console.log(num2); //kristina double 2.76. nick 2.76

// let str = 'hello';
// // str = 'world';
// // str = str.concat(' world');
// str += ' world'; []
// console.log(str);

//how many variables, primitive values, and objects in code
// let array = ["today", "tomorrow"]; 

// const stuff = array; 

// let something; 

// const num = 55;

// function work(input) {
//   return input * 2;
// }

//v: 6(array, stuff, something, num, work, input), pv: 5 (today, tomorrow, undefined, 55, 2), o(["today", "tomorrow"], work() ): 2. 




// variables: array, stuff, something, num, work, input
// primitive values: 'today', 'tomorrow', 55, 2, undefined 
// objects: ['today', 'tomorrow'], work

// console.log(work(5));

// function work(input) {
//   return input * 2;
// }


//
// function what(me) {
//   function who(notMe) {
//     notMe * 2;
//   }

//   return null;
// }

// (function(what) {
//   return 5 * what;
// })  

// Identify the variables, primitives, and objects in the code. -- Nick

// const person = {
//   name: 'Alice',
//   age: 30
// };

// function updateAge(obj) {
//   obj = { name: 'Alice', age: 31 };
// }

// updateAge(person);
// console.log(person);
/* variables: person, updateAge, obj. primitives: 'Alice', 30, 'Alice', 31. Objects: person, updateAge, obj. */

// What is logged on the last line? Explain. -- Kristina
// const a = 1 && 2; //true
// const b = 0 || 3; //3

// if (a > b) {
//   c = a;
// } else {
//   c = b;
// }

// 3 is logged to the last line because a is a boolean and not a number. 

//2 What is the output? Explain why.   -- Michael 
// const person = {
//   name: 'Alice',
//   age: 30
// };

// function updateAge(obj) { // pass by reference up to this point obj === person
//   obj = { name: 'Alice', age: 31 }; // local variable object is reassigned. 
// }

// updateAge(person);
// console.log(person);
// doing a reassignment does not mutate the object. 

//alice 30 is logged to the console because the person object is declared with a const, which means that it cannot be reassigned. 

//4 Go over snippet1 and snippet2. Both code will log "hello" . What code concept does it demonstrate?  -- Seth b

// snippet1
// function hello() {
//   console.log("hello");
// }

// function greet(greeting) {
//   greeting();
// }

// greet(hello);

// // snippet2
// function hello() {
//   console.log("hello");
// }

// let greet = hello;  
// greet();            

//5 What will be logged to the console? What concept does the code demonstrate? -- Seth L
// greeter();
// greetiest();

// function greeter() {
//   const hello = "Hello";
//   const world = "World";

//   function greetiest() {
//     console.log(world);
//   }

//   console.log(hello);
// }

//logical operator 1 && 2
//conditional statement a > b
// null && 2 outputs null
// 3 && null && 2 outputs null
// 3 && 1 && 2 outputs 2. 

// 12/21 kristina

// What's the output and why?

// let letter = 'c';
// const letters = ['a', 'b', letter, 'd'];
// letter = 'e';
// console.log(letters);

// let arr = {1: 2, 3: 4};

// arr = [1];

// console.log(arr);

// let a = '123';
// let b = Number(a);

// console.log('2' + '2'); // 22
// console.log('2' - '2'); // 0
// console.log('2' / '2'); // 1
// console.log('2' * 'A'); // NaN
// console.log('2' + 2);  //  22
// console.log(2 + '2'); //  22

// console.log(typeof (' ' + undefined));
// console.log(typeof([] + true));

// console.log(Number.isNaN(NaN));
// console.log(isNaN(NaN));

// Number.isNaN({});
// // <- false, {} is not NaN
// Number.isNaN('ponyfoo')
// // <- false, 'ponyfoo' is not NaN
// Number.isNaN(NaN)
// // <- true, NaN is NaN
// Number.isNaN('pony'/'foo')
// // <- true, 'pony'/'foo' is NaN, NaN is NaN

// isNaN({});
// // <- true, {} is not a number
// isNaN('ponyfoo')
// // <- true, 'ponyfoo' is not a number
// isNaN(NaN)
// // <- true, NaN is not a number
// isNaN('pony'/'foo')
// // <- true, 'pony'/'foo' is NaN, NaN is not a number



// function isBlank(string) {
//   return string.trim().length === 0;
// }

// console.log(isBlank('mars  ')); // true
// console.log(isBlank('  ')); // false
// console.log(isBlank('')); // true

// console.log('  mars lunar   ' .trim().length);
// console.log('  '.trim().length);
// console.log(''.trim().length);

// parseInt('12xyz');


// //Explain code and what's the output?

// let string = 'launch school tech & talk';
// let words = string.split(' ');
// let capitalizedWords = [];

// for (let i = 0; i < words.length; i++) {
//   let word = words[i];

//   capitalizedWords.push(word[0].toUpperCase() + word.slice(1));
// }

// console.log(capitalizedWords.join(' '));


// In our solution, we capitalize one word after the other. We use `string.split(' ')` to split the input string into words, then iterate over these words, collecting their capitalized version in the array `capitalizedWords`, and finally join the capitalized words into the final string.

// Capitalization of a word can be achieved by taking the first character (`word[0]`), transform it to upper case, and then concatenate it with the rest of the word (`word.slice(1)`). If we come across a word that is only one character long, `word.slice(1)` is the empty string. This is case for `&`. Note that `'&'.toUpperCase()` returns `'&'` (as would `'&'.toLowerCase()`), because `'&'` does not distinguish upper and lower case.

/*
Where My Anagrams At?
Two words are anagrams of each other if they both contain the same letters.

Write a method that will find all the anagrams of a word from a list.
You will be given two inputs a word and an array with words.
You should return an array of all the anagrams or an empty array if
there are none.
*/

// Test cases
// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// ['aabb', 'bbaa']

// console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// ['carer', 'racer']

// console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'Racer']));
// ['carer', 'Racer']

// console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));
// []


// let word = 'abba'; 
// let array = ['aabb', 'abcd', 'bbaa', 'dada'];

// write a fuction that called anagrams
// method toLowerCase applied to strings 
//in the body of the function we will apply method sort() on every element of array 
// compare every element of the word to 

// function anagrams(word, arrayOfWords) {
//   let newWord = word.toLowerCase()
//                     .split('')
//                     .sort()
//                     .join('');

//   let wordsArray = [];

//   for (let i = 0; i < arrayOfWords.length; i++) {
//     wordsArray.push(arrayOfWords[i].toLowerCase()
//                                      .split('')
//                                      .sort()
//                                      .join(''));  
//   }
  
//   let anagramsArray = wordsArray.filter((word) => word === newWord);
  
//   return anagramsArray;
// }

// console.log(anagrams(word, array));
// // console.log(anagrams('Raver'));
// // console.log(array);
// console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'Racer']));
// console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));



// let name = getNameFromUser();
// if (name === "") {
//   console.log("you must enter your name!");
// } else {
//   console.log(`Hi ${name}`);
// }

// console.log("" == 0); //true
// console.log("" === 0); //false


// console.log(3 && 'foo'); // 

// console.log(0 && 'foo');

// console.log(0 || 'foo');


// let foo = null;
// let bar = 'qux';
// let isOk = foo || bar;


// if (foo || bar) {
//   isOk = true;
// } else {
//   isOk = false;
// }

// console.log(isOk);

// null ?? 'over here'

// false ?? "not me"

// undefined ?? "pick me!"

// // ternary expression
// let isOk = (foo || bar) ? true : false;


// function foo(str) {
//   let found = ["Pete", "Alli", "Chris"].find(name => name === str);
//   return found ?? "Not found";
// }

// console.log(foo("Alli"));    //Alli
// console.log(foo("Allison")); // Not Found 

// let obj = {'1': 2, '2': 3};


// let person = {
//   name: 'Bob',
//   age: 30,
//   height: '6 ft',
// };

// let personKeys = Object.keys(person);
// console.log(personKeys); // array of person object keys: [name, age, height]
    
// personKeys.forEach(key => {
//   console.log(person[key]); // return the value of each key in the person object.
// }); 




// let person = {
//   name: 'Bob',
//   age: 30,
//   height: '6 ft',
// };

// let newObject = person; 

// let personKeys = Object.keys(person);

// console.log(personKeys);
// personKeys.forEach(key => {
//   console.log(person[key]);
// });

//are the iterators considered primitive?

// console.log((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false); //true

// console.log((!true && (!(100 / 5) === 20) || ((328 / 4) === 82)) && false);


// function arraysEqual(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;

//   for (let i = 0; i < arr1.length; i += 1) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(arraysEqual([1, 2, 3], [1, 2, 3])); //true
// console.log(arraysEqual([1, 2, 3], [4, 5, 6])); // false
// console.log(arraysEqual([1, 2, 3], [1, 2, 3, 4])); // false



// // What are the final length values for array1, array2, array3, array4, array5?

// let array1 = [1, 2, undefined, 4]; // 4[]

// let array2 = [1];
// array2.length = 5; // [1, undefined, undefined, undefined, undefined] // 5

// let array3 = [];
// array3[-1] = [1]; // 0 negative integers have no effect on the array. 

// let array4 = [1, 2, 3, 4, 5];
// array4.length = 3; //[1, 2, 3] // 3 length

// let array5 = [];
// array5[100] = 3; // 101

// let myArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ]

// for (let i = 0; i < myArray.length; i++) {
//   for (let j = 0; j < myArray.length; j++) {
//     if (myArray[i][j] % 2 === 0) {
//       console.log(myArray[i][j]);
//     }
//   }
// }


// for (let i = 0; i < myArray.length; i += 1) {
//   for (let j = 0; j < myArray[i].length; j += 1) {
//     let value = myArray[i][j];
//     if (value % 2 === 0) {
//       console.log(value);
//     }
//   }
// }

// // myArray[] = [1, 3, 6, 11]
// // myArray[0][1] = 3
// console.log(0 / 0);

/*
  EXPRESSIONS:
    - anything in JS that evaluate to a value
      5 + 2
      "hi"
      [1, 2]
    - function expressions
      IIFE (Immediately Invoked Function !EXPRESSION!)
      (function something(b) {
        do stuff
      })()
    Output vs return values
      Output : operands or expressions can be output to the console but...that is not the same as the return value of the expression
    Retun value:
      console.log(5+2)
        // output = 7
        // return value - UNDEFINED
  STATEMENTS: 
    JS code that commands a task
    Statements may UTILIZE expressions, they are NOT expressions. 
    Examples of JavaScript statements are:
      if...else
      break
      return
      do...while
      variable declarations
      class
    They cannot be passed around the program 
        Make conditionals expressions by using && or || etc.
 * 
 */
 // Why does console.log output undefined?


/*
 * NAME THE 5 RULES OF VARIABLE SCOPING
 *  1. inner scope variables can access outer scope variables. 
 *  2. outer scope vars cannot access inner scope variables.
 *  3. INNER functions have their own scope
 *  4. Peer scopes do not conflict
 *  5. Inner scope variables can shadow outer scope vars
 *    ? What happens when shadowing takes place?
 *      - The result is that the outter scope variable is blocked or "shadowed" by the inner scope variable,    leading to unintended consequences in the code.
 */



// What will the following code log to the console and why? Don't run it until you have tried to answer.

// let num = 5; // declare and initialize var `num` with value of '5'

// function myFunc() {
//   console.log(num); // outputting 5
//   num = 10; // not declaring var, but reassigning
// }

// myFunc(); // logs 5
// console.log(num); // 10

/********************* */
// What will the following code log to the console and why? Don't run it until you have tried to answer.

// let myVar = [1];

// function myFunc(myVar) {
//   myVar[0] = 2; //
// }

// myFunc(myVar);
// console.log(myVar); // n: 2, k: 2, sh: [2]


// let myVar = 2; 

// function myFunc(myVar) {
//   myVar = 2209834098;
// }

// myFunc(myVar);
// console.log(myVar); // k: 1, 

// myArr = [1, 2]
// function pByVal(param) {
//   myArr[0] = 1;
// }

// // IN THE CONTEXT OF FUNCTIONS
// let word = "hello"; // string
// let wordTwist = word.replace("h", "j"); // LOOKS LIKE we're mutating the string...
// console.log(wordTwist); // <- "jello"
// console.log(word); // <- "hello"


/**
 * DISTINGUISHING BETWEEN SHADOWING CONCEPTS & P-BY-REF/VALUE CONCEPTS
 * 
 */

// let myVar = [1];

// function myFunc(myVar) {
//   myVar[0] = 2; // this is undefined on account of shadowing
// }

// myFunc(); // TypeError: Cannot set properties of undefined (setting '0')
// console.log(myVar);

// Reassigning the first element of the global myVar throws a TypeError because the reference to that global myVar inside the function is blocked on account of shadowing. Therefore, myVar[0] is undefined.



// function changeName(name) {
//   name[0] = 'b'
//   name[1] = 'o'
//   name[2] = 'b' ; // does this reassignment change the variable outside the function?
// }

// function anotherFunction() {
//   let name = ['k','i','m'];
//   changeName(name);
//   console.log(name); // => logs 'jim'
// }

// anotherFunction();

// Note that this code example has two different `name` variables. One is in the scope of the `changeName` function while the other is in `anotherFunction`'s scope. These two names are in separate scopes, and have no direct relationship with each other.

// The question is: when we use `name` from `anotherFunction` to provide an argument to `changeName`, are we passing it by reference or by value? It looks like we may be passing it by value since reassigning the variable does not affect the variable inside `anotherFunction`. Had the `name` variable in `anotherFunction` changed, we would say that JavaScript is pass-by-reference. Does that mean that JavaScript is pass-by-value?

// let scottishCities = ['Edinburgh', 'Glasgow', 'Dundee', 'Aberdeen', 'Inverness'];

// const myFavCity = scottishCities[3];

// let britishCities = scottishCities; 

// scottishCities = britishCities.push('Manchester', 'London', 'Bristol', 'Cardiff', 'Belfast');

// let goodCities = britishCities.slice(2, 4);

// britishCities.push(goodCities);

// console.log(scottishCities);

// console.log(britishCities);

// console.log(goodCities);

/* In JavaScript, functions are first-class citizens, which means they have the same properties and abilities as other types of values, such as numbers, strings, and objects. */


// Our example declares a variable named `greetPeople` and assigns it to the function expression after the `=` sign. We can do that since JS functions are **first-class functions**.

// The critical feature of first-class functions is that you can treat them like any other value. **All JavaScript functions are objects**. You can assign them to variables, pass them as arguments to other functions, and return them from a function call.

// console.log([1, 2, 3] + [4, 5]);

// console.log([1, 2, 3] - [4, 5]);

// console.log([] + true);

// let thisThing = 0;

// if (thisThing) {
//   console.log("It works");
// }

// let time = 8;

// if (time <= 11) {
//   let greeting = "Good morning";
// }

// console.log(time);
// console.log(greeting);

// let color = "blue";

// function func1() {
//   let size = "large";

//   function func2() {
//     let number = "five";
//   }

//   func2();

//   console.log(color);
//   console.log(size);
//   console.log(number);
// }

// func1();

/*Examine the two snippets below. Explain why Snippet 1 outputs 6.28318, but Snippet 2 outputs 3.14159. Is num on line 1 and 4 the same variable in Snippet 1? How about Snippet 2? Explain how you came up with your answer. Lastly, identify which underlying concept is at play in Snippet 1 and which in Snippet 2.*/

// let greet = "Knock";

// function emphasize(str) {
//   str = str.toUpperCase() + "!";
//   return str;
// }

// console.log(emphasize(greet));
// console.log(greet);

// let greet = ["Knock"];

// function repeatThrice(arr) {
//   arr.push("Knock", 'Knock');
// }

// repeatThrice(greet);
// console.log(greet);

/*
The following two snippets look very similar, but produce two different outputs. Describe what the increment function does in each snippet, and explain the underlying cause of the differing outputs.


*/

// let data = { count: 0 };

// function increment(data) {
//   data.count += 1;
// }

// increment(data);
// console.log(data.count);

// let data = { count: 0 };
// // let num = 0;
// function increment(count) {
//   return (count += 1);
// }

// console.log(increment(data.count));
// console.log(data.count);

// let b = ["blue"];
// const COLOURS = ["green", "yellow", b, "red"];
// b.push("black");
// console.log(COLOURS);

// let str = "stringy";

// function thisFunc(str) {
//   str = str[0].toUpperCase() + str.slice(1,);
// }

// thisFunc(str);
// console.log(str);

// let str = "stringy";

// function thatFunc(str) {
//   str = "notStringy";
// }

// thatFunc(str);
// console.log(str);

// let a = 3;

// function func(num) {
//   newNum = 44;

//   let firstNum = 1;

//   let finalNum = newNum + firstNum;
  
//   function newFunc(num) {
//     let b = 4; 

//     c = 5; 
//   }
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   return num * 4; 
// }

// func(5);

// let str = 'stringy';

// function mutate() {
//   str = 'notStringy';
// }

// mutate();
// console.log(str);

// let greet = "Knock";

// function emphasize(str) {
//   str = str.toUpperCase() + "!";
//   return str;
// }

// emphasize(greet);
// console.log(greet);

// let year = 2024;

// function halfTime(year) {
//   year /= 2;
// }

// halfTime();
// console.log(year);

/*// Question 1: Will the code raise an error? Why?
// let numbers = [1, 2, 3];
// numbers[6] = 5;
// console.log(numbers);
// console.log(numbers[4]);
// numbers[4] = undefined;
// console.log(numbers);


// An error won't be raised because when we assign a value to an index of an array object that is greater than the length of that object, it will assign the indexes before the newly assigned index as an empty item. When accessing those indexes, they will output undefined. 

//On line 2 we declare and initialize the global variable numbers and assign it to the reference of an array object. On line 3 we assign the value 5 to the 6th index of the array object. When an index is assigned to an array object that is greater than current length of that object, the length of that object is equal to the new index plus one. indexs that are not assigned will be an empty item. When those indexes are accessed, they will output undefined. As we see on the line 4 when the console.log method is invoked with the argument numbers, the output is the array object [1, 2, 3, <3 empty items>, 5]. If we would invoke console.log method on indexes 3, 4, or 5 - the outputs will be undefined.

// Question2: What will the code output and why? What principle does this represent?

// let a = "string"; 

// let b = [1, 2, 3, a, 4, 5];

// a = "newString";

// console.log(b);

//The output of this code will be an array object [1, 2, 3, 'string', 4, 5]. If a variable is assigned to an element of an array object, and that variable holds a primitive value, the object will not be mutated if that variable is reassigned. 

// On the line 16 we declared and initialized global variable a and assign it to primitive value 'string', storing that value in memory. When we reassign variable a on line 20 to a new primitive value 'newString', it also gets a new memory address. On the line 18 we declare and initialize global variable b and assign it to reference of array object. The variable a inside this array object hold the original memory and value, which is "string". We see this when we invoke console.log method with argument b on the line 22.   

// Question 3: What will the code output and why? What principle does this represent?

let a = ["string"];

let b = [1, 2, 3, a, 4, 5];

a.push("newString");

console.log(b);

//questions on mutability of objects and primitives. */

// let numbers = [1, 2, 3, 4];
// numbers[0] = numbers[0] + 1;  // => 2
// numbers;                      // => [ 2, 2, 3, 4 ]

// numbers = numbers.map((num) => num += 1);
// console.log(numbers);

// numbers[4] = numbers[4] += 1;
// console.log(numbers);


// let greeting = ['Hello'];
// ​
// const foo = (arr) => {
//   arr = arr.push("World!");
//   return arr;
// };
// ​
// console.log(foo(greeting));
// console.log(greeting); 

/* [Understand the] Problem

input: string
output: substrings of string that are palindromes.
rules: 
  explicit:
    - palindromes are case sensitive. 
    - return only substrings that are palindromes.
  implicit:
    - if given an empty string, return the empty array.

*/
