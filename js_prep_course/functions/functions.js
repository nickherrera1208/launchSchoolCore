//  ***********************************************************************Exercises*******************************************************************************

/* 1. What does this code log to the console? Does executing the foo function affect the output? Why or why not? 

   let bar = 1;
   function foo() {
    let bar = 2;
   }

   foo();
   console.log(bar); */

/* The console logs 1 to the console. This is because a different variable that is local in the function does not affect the variable of the same name outside of 
   the function since it is global in scope. */

/* 2. In the exercises for the previous chapter, you wrote a dynamic program named greeter.js. Add a function to this program that solicits the user's first and
      last names in separate invocations; the functions should return the appropriate name as as string. use the return values to greet the user with their full 
      name. */

/* 3. Write a function that uses a multiply function to multiply two numbers and returns the result. Ask the user to enter the two numbers, then output the numbers
      and result as a simple equation. 

      $ node multiply.js
      Enter the first number: 3.141592653589793
      Enter the second number: 2.718281828459045
      3.141592653589793 * 2.718281828459045 = 8.539734222673566 */

      function multiply(){
        let rlSync = require('readline-sync');
        let num1 = rlSync.question("What is the first number? ");
        let num2 = rlSync.question("What is the second number? ");
        let sum = Number(num1) * Number(num2);
        return console.log(`${Number(num1)} * ${Number(num2)} = ${sum}`);
      }

      multiply();

/* 4. What does the following code log to the console? 

      function scream(words) {
        words = words + '!!!!';
        return;
        console.log(words);
      }

      scream('Yipeee'); */

/* The above code logs nothing to the console. */

/* 5. What does the following code log to the console?

      function scream(words) {
        return words + '!!!!';
      }

      scream('Yipeee'); */

/* The above code outputs Yipeee!!!! but does not log anything to the console. */

/* 6. In the code shown below, identify the following items: 
                                                            the function arguments: 2,3,4
                                                            the function body: everything in the {}
                                                            the function declaration: function to the closing curly brace
                                                            the function invocation: the assignment value of product
                                                            the function name: multiplyNumbers
                                                            the function parameters: num1, num2, num3
                                                            the function return value: result
                                                            the names of all variables in this program: result, product, num1, num2, num3, multiplyNumbers
                                                            
                                                            function multiplyNumbers(num1, num2, num3) {
                                                              let result = num1 * num2 * num3;
                                                              return result;
                                                            }

                                                            let product = multiplyNumbers(2, 3, 4); */

/* 7. Without running the following code, what do you think it will output? 

      function foo(bar, qux) {
        console.log(bar);
        console.log(qux);
      }

      foo('Hello'); */

/* The output be 'Hello' and then undefined since the qux variable didn't get initialized with a value.  */

/* 8. Without running the following code, what do you think it will output? 

      function foo(bar, qux) {
        console.log(bar);
        console.log(qux);
      }

      foo(42, 3.1415, 2.718);     */

//  The code above will output the first two numbers but not the third. 

/* 9. Identify all of the variables named on each line of the following code. You may assume that "question" is the name of a built-in function in javascript 
      (it is not, so this code won't work as written). 

      function multiply(left, right) {                                  <--- multiply: global, left: local, right: local
        let product = left * right;                                     <--- product: local, left: local, right: local
        return product;                                                 <--- product: local
      }

      function getNumber(prompt) {                                      <--- getNumber: global, prompt: local
        return parseFloat(question(prompt));                            <--- question: local, prompt: local, parseFloat: local
      }

      let left = getNumber('Enter the first number: ');                 <--- left: global, getNumber: local
      let right = getNumber('Enter the second number: ');               <--- right: global, getNumber: local 
      console.log(`${left} * ${right} = ${multiply(left, right)}`);     <--- left: local, right: local, multiply: local, console: global */

/* 10. Using the code from Exercise 9, classify each variable name as either global or local. For our purposes here, you may assume that the code from Exercise 9 
       is the entire program. 

       LS Answers

       Global Variables: multiply, getNumber, left, right, console, parseFloat, question.
       Local Variables: left, right, product, prompt */

/* 11. Using the code from Exercise 9, are the left and right variables on lines 1 and 2 the same as the left and right variables on lines 10-12? Explain your
       reasoning. 

       They are not. The variables on lines 1 and 2 are local and the others on 10-12 are global. */