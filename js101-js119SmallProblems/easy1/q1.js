// Isn't it Odd?

/* Write a function that takes one integer argument, which may be positive, negative, or zero.

This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value. */

      /*console.log(isOdd(2)); // => false
      console.log(isOdd(5)); // => true
      console.log(isOdd(-17)); // => true
      console.log(isOdd(-8)); // => false
      console.log(isOdd(0)); // => false
      console.log(isOdd(7)); // => true */

      function isOdd(num) {
        if (Math.abs(num) % 2 != 0) {
          return true;
        }
        return false;
      }

      console.log(isOdd(2)); 
      console.log(isOdd(5)); 
      console.log(isOdd(-17));
      console.log(isOdd(-8)); 
      console.log(isOdd(0)); 
      console.log(isOdd(7)); 

      