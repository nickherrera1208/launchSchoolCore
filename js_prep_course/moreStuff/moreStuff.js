//  ***********************************************************************Exercises*******************************************************************************

/* 1. What does this code log to the console? Why? 

    let array1 = [1, 2, 3];
    let array2 = array1;
    array1[1] = 4;
    console.log(array2); */

/* The code logs [1, 4, 3] to the console. this is because the address to which array2 is referring is referring does not change. */

/* 2. What does the following error message and stack trace tell you?

    $ node exercise2.js
    /Users/wolfy/tmp/exercise2.js:4
      console.log(greeting);
                  ^

    ReferenceError: greeting is not defined
        at hello (/Users/wolfy/tmp/exercise2.js:4:15)
        at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1)
        at Module._compile (internal/modules/cjs/loader.js:721:30)
        at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
        at Module.load (internal/modules/cjs/loader.js:620:32)
        at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
        at Function.Module._load (internal/modules/cjs/loader.js:552:3)
        at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
        at executeUserCode (internal/bootstrap/node.js:342:17)
        at startExecution (internal/bootstrap/node.js:276:5)

    the reference error means that greeting has not been defined so it cannot reference its value. */

/* 3. Write some code to output the square root of 37. */

    // console.log(Math.sqrt(37));

/* 4. Given a list of numbers, write some code to find and display the largest numeric value in the list. */

   /*let list1 = [1, 6, 3, 2];
   let list2 = [-1, -6, -3, -2];
   let list3 = [2, 2];

    console.log(Math.max.apply(Math, list1));
    console.log(Math.max(...list2));
    console.log(Math.max(...list3));
    console.log(Math.max(1,6,3,2)); */

/* 5. What does the following function do?

    function doSomething(string) {
      return string.split(' ').reverse().map((value) => value.length);
    } 

    it splits a tring into an array of words, reverses the array elements, then outputs the length of each word in a new array. */

/* 6. Write a function that searches an array of strings for every element that matches the regular expression given by its argument. 
      The function should return all matching elements in an array. */

     /* function allMatches(array, compare){
        let filteredList = array.filter((word) => compare.test(word));
        return filteredList;
          }
          
          
        
        
      

      let words = [
        'laboratory',
        'experiment',
        'flab',
        'Pans Labyrinth',
        'elaborate',
        'polar bear',
      ];
      
      console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate'] */

/* 7. What is exception handling and what problem does it solve?

      Exception handling is when you change the code to adapt to errors. */

/* 8. Challenging Exercise: This exercise has nothing to do with this chapter. Instead, it uses concepts you learned earlier in the book. 
      If you can't figure out the answer, don't worry: this question can stump developers with more experience than you have.
      Earlier, we learned that Number.isNaN(value) returns true if value is the NaN value, false otherwise. 
      You can also use Object.is(value, NaN) to make the same determination.
      Without using either of those methods, write a function named isNotANumber that returns true if the value passed to it as an argument is NaN, 
      false if it is not. */

     /* function isNotANumber(num){
        let array = [];
        array.push(num);
        if (array.includes(NaN)){
          return 'true';
        }
        return 'false';
      }

      console.log(isNotANumber(4)); */

      /* LS Answer

      function isNotANumber(value) {
        return value !== value;
      }

      This works because NaN is the only JS value that is not equal to itself. */

/* 9. Challenging Exercise: This exercise has nothing to do with this chapter. Instead, it uses concepts you learned earlier in the book. 
      If you can't figure out the answer, don't worry: this question can stump developers with more experience than you have.
      Earlier, we learned that JavaScript has multiple versions of the numeric value zero. In particular, it has 0 and -0. 
      While it's mathematically nonsensical to distinguish between 0 and -0, they are distinct values in JavaScript. 
      We won't get into why JavaScript has a 0 and -0, but it can be useful in some cases. 
      There's a problem, however: JavaScript itself doesn't seem to realize that the values are distinct: 
      
      > 0 === -0
      = true

      > String(-0)
      = '0'

      Fortunately, you can use Object.is to determine whether a value is -0: 
      
      > let value = -0;
      > Object.is(value, 0)
      = false

      > Object.is(value, -0)
      = true 
      
      There are other ways to detect a -0 value. Without using Object.is, write a function that will return true if the argument is -0, 
      and false if it is 0 or any other number.*/

      /* function isItNegativeZero(num){
        return 1/num === -Infinity;
      }
      
      console.log(isItNegativeZero(-2)); */

/* 10. Challenging Exercise This exercise has nothing to do with this chapter. Instead, it uses concepts you learned earlier in the book. 
       If you can't figure out the answer, don't worry: this question can stump developers with more experience than you have.

       Consider this code:

       > let x = "5"
       > x = x + 1
       = "51"

       Now, consider this code:

       > let y = "5"
       > y++

       What gets returned by y++ in the second snippet, and why? */

       /* 6 get returned because the increment command coerces the string to a number whereas the first snippet concatenates the 1 to the string. */









