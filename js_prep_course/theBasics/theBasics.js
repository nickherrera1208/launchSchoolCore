  //  ***********************************************************************Exercises*******************************************************************************

/*1. Concatenate two or more strings, one with your first name and one with your last, to create a string with your full name as its value. For example, if your name 
is John Doe, think about how you can put 'John' and 'Doe' together to get 'John Doe'.*/
console.log("Nicholas" + " " + "Herrera");

 /*2. Using arithmetic operators, get the individual digits of a 4-digit number like 4936:
      1. thousands place is 4
      2. hundreds place is 9
      3. tens place is 3
      4. ones place is 6 */
let num = 4936;
console.log(`Thousands place is ${num- 4932}`);
console.log(`Hundreds place is ${num - 4927}`);
console.log(`Tens place is ${num - 4933}`);
console.log(`Ones place is ${num - 4930}`);

// another solution

let numb = 4936;
let ones = numb % 10;
let numb1 = (numb - ones) / 10;
let tens = numb1 % 10;
let numb2 = (numb1 - tens) / 10;
let hundreds = numb2 % 10;
let numb3 = (numb2 - hundreds) / 10;
let thousands = numb3 % 10;

console.log(`Thousands place is ${thousands}`);
console.log(`Hundreds place is ${hundreds}`);
console.log(`Tens place is ${tens}`);
console.log(`Ones place is ${ones}`);

// 3. Identify the data type for each of the following values: 

console.log(typeof('true'));
console.log(typeof(false));
console.log(typeof(1.5));
console.log(typeof(2));
console.log(typeof(undefined));
console.log(typeof({ foo: 'bar' }));

/* 4. Explain why this code logs '510' instead of 15.

   console.log('5' + 10); */

/*  The above line of code outputs '510' instead of '15' because each of the elements are a different data type. When a string and number are attempted to be 
    concatenated, the number is converted to a string first and then concatenated. This is specific for the + operand. If using the - operand, it will calculate
    mathematically.
    
    This is an example of implicit type coercion, meaning that when the operands of an operator are different data types, one will automatically be converted 
    to equal the data type of the other, and then executed. */

// 5. Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead. 

console.log(Number('5')+ 10);

/* 6. Use the template literal syntax along with the expression Number('5') + 10 to log the following sentence to the console:
   The value of 5 + 10 is 15. */

console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);

/* 7. Will an error occur if you try to access an array element with an index that is greater than or equal to the length of the array? For example: 
   let foo = ['a', 'b', 'c'];
   console.log(foo.length);   => 3
   console.log(foo[3]);   will this result in an error? */

// An error will not occur. The output result will be undefined as the element index is out of range of the array. 

/* 8. Create an array named 'names that contains a list of pet names. For instance: Name 
                                                                                    asta
                                                                                    butterscotch
                                                                                    pudding
                                                                                    neptune
                                                                                    darwin */

let names = [ 'asta', 'butterscotch', 'pudding', 'neptune', 'darwin' ];

/* 9. Create an object named "pets" that contains a list of pet names and the type of animal. For instance: Name          Animal
                                                                                                            asta          dog
                                                                                                            butterscotch  cat
                                                                                                            pudding       cat
                                                                                                            neptune       fish
                                                                                                            darwin        lizard */
let pets = {
  "asta": "dog",
  "butterscotch": "cat",
  "pudding": "cat",
  "neptune": "fish",
  "darwin": "lizard"
};

/* 10. What value does the following expression evaluate to? 

    'foo' === 'Foo' */

// The above expression evaluates to false since they are different values. 
                                                                                                            
/* 11. What value does the following expression evaluate to? 

   parseInt('3.1415') */

// The above line of code evaluates to the number 3. parseInt converts the string to a numeric value and only take the digit in front of the decimal. 

/* 12. What value does the following expression evaluate to?

    '12' < '9' */

/* The above line of code evaluates to true. The operand first compares the first element of the string '12' to '9' and then accepts the character in front of it
as being less than '9'. */