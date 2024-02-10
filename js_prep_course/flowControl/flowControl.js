//  ***********************************************************************Exercises*******************************************************************************

/* 1. What values do the following expressions evaluate to? 

      false || (true && false); false
      true || (1 + 2); true
      (1 + 2) || true; 3
      true && (1 + 2); 3
      false && (1 + 2); false
      (1 + 2) && true; true
      (32 * 4) >= 129; false
      false !== !true; false
      true === 4; false
      false === (847 === '847'); true
      false === (847 == '847'); false
      (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;    true   */

/* 2. Write a function, evenOrOdd, taht determines whether its argument is an even number. If it is, the function should log 'even' to the console; otherwise it 
      should log 'odd. For now, assume that the argument is always an integer. */

       function evenOrOdd(num) {
        if (typeof(num) === "number") {
          console.log(num % 2 === 0 ? 'even' : 'odd');
        } else console.log('Error, please enter a valid number.');
         
      } 

      evenOrOdd(45); 

/* 3. Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that the argument is an integer. If it isn't, the function should 
      issue an error message and return.  SEE ABOVE */

/* 4. What does the following code log to console, and why?

      function barCodeScanner(serial) {
        switch (serial) {
          case '123':
            console.log('Product1');
          case '113':
            console.log('Product2');
          case '142':
            console.log('Product3');
          default:
            console.log('Product not found!');
        }
      }

      barCodeScanner('113'); Product2, Product3, and Product not found! because there are no break statements. The code falls through, even though it does not match 
      criteria. */

/* 5. Refactor this statment to use an if statement instead.

      return foo() ? 'bar' : qux(); */

     /* My answer

      function foo(){return ;}
      function qux(){return ;}
     if (foo()) {
      console.log('bar');
     } else qux();

     LS answer

     if (foo()) {
      return 'bar';
    } else {
      return qux();
    } */

/*  6. What does this code output to the console?

      function isArrayEmpty(arr) {
        if (arr) {
          console.log('Not Empty');
        } else {
          console.log('Empty');
        }
      }

      isArrayEmpty([]);  Not Empty. even though the array is empty, the length is 0 making it truthy.*/

/* 7. Write a function that takes a string as an argument and returns an all-caps version of the string when the string is longer than 10 characters. 
      Otherwise, it should return the original string. Example; change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'. */

      function capIt(str){
        if (str.length > 10){
          return str.toUpperCase();
        } else {return str;}
      }

      console.log(capIt("NicholasHer"));

/* 8. Write a function that logs whether an integer is between 0 and 50 (inclusive), between 51 and 100 (inclusive), greater than 100, or less than 0. */

      /*function numCheck(num){
        if ((num <= 50) && (num >= 0 )) {
          console.log(`${num} is between 0 and 50`);
        } else if ((num >= 51) && (num <= 100)){
          console.log(`${num} is between 51 and 100`);
        } else if (num > 100){
          console.log(`${num} is greater than 100`);
        } else {console.log(`${num} is less than 0`);}
      }

      numCheck(-94); */

/* 9. Without running this code, what will it print?

      console.log(false ?? null); false
      console.log(true ?? (1 + 2)); true
      console.log((1 + 2) ?? true); 3
      console.log(null ?? false); false
      console.log(undefined ?? (1 + 2)); 3
      console.log((1 + 2) ?? null); 3 
      console.log(null ?? undefined); undefined
      console.log(undefined ?? null); null

      Remember that the ?? returns the second operand if the first operand is nullish (null or undefined). Otherwise it returns the first operand. */

  /* 10. Without running this code, what will it print? 

        function show(foo = undefined, bar = null) {
          console.log(`foo is ${foo ?? 3}, bar is ${bar ?? 42}`);
        }

        show(5, 7); 5, 7
        show(0, 0); 0,0
        show(4); 4, 42
        show(); 3, 42*/