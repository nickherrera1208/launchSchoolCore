/* eslint-disable no-trailing-spaces */
/* 1. Will the following functions return the same results?

    function first() {
      return {
        prop1: "hi there",
      };
    }

    function second() {
      return
      {
        prop1: "hi there";
      }
    }

    console.log(first());
    console.log(second()); 

    Try to answer without running the code or looking at the solution. */


/* The following code will not output the same results.  This is because
    the code in first() does not have a semicolon and so js auto fills 
    one where it thinks it is needed. The semicolon is added after
    return. which makes it undefined.*/

/* 2. What does the last line in the following code output?

      let object = { first: [1] };
      let numArray = object["first"];
      numArray.push(2);

      console.log(numArray); //  => "[1, 2]"
      console.log(object);

      Try to answer without running the code or looking at the solution.
      */

/* It will return the same as numArray because it is being passed
      by reference. */

/* 3. Given the following similar sets of code, what will each code 
      snippet print?
A)

function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

B)

function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

C)

function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`); */

/* A) one is one, two is two, three is three. This is because of the 
variables shadowing the global ones. The global variables do not get 
reassigned. 
   B) same as above. 
   C) one is two, two is three, three is one. This is because splice is
   a destructive function and mutates the arrays. */

/* 4. Can you identify all of the variables, primitive values, and 
objects in the following code?

function boo(scare) {
  let myBoo = scare.toUpperCase() + "!!!";
  console.log(myBoo);
}

const halloweenCollection = {
  greet: "Happy Halloween",
  scare: "Boo",
  wish: "May all your pumpkins be glowing",
};

let myBoo = boo(halloweenCollection["greet"]);*/

/* Variables (5): boo, scare, myBoo, halloweenCollection, myBoo.

  Primitive Values(13): scare, myBoo, scare.toUpperCase, "!!!",  myBoo,
  greet, scare, wish, happy halloween, boo, may all your pumpkins be 
  glowing, myBoo, greet.

  Objects(2): boo, halloweenCollection */

/* 5. Ben was tasked to write a simple JavaScript function to determine 
  whether an input string is an IP address using 4 dot-separated numbers,
   e.g., 10.4.5.11. He is not familiar with regular expressions.

Alyssa supplied Ben with a function named isAnIpNumber. It determines 
whether a string is a numeric string between 0 and 255 as required for IP
numbers and asked Ben to use it. Here's the code that Ben wrote: 

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      break;
    }
  }

  return true;
}

Alyssa reviewed Ben's code and said, "It's a good start, but you missed 
a few things. You're not returning a false condition, and you're not 
handling the case when the input string has more or less than 4 
components, e.g., 4.5.5 or 1.2.3.4.5: both those values should be 
invalid."

Help Ben fix his code.*/

/* function isAnIpNumber(string) {
  if (typeof (Number(string)) === 'number' && string.length > 0) {
    return true;
  }
  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  } 

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }
  return true;
} */


