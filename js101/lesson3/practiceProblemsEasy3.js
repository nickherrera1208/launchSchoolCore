/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable max-len */
/* 1. Write three different ways to remove all of the elements from the following array:

      let numbers = [1, 2, 3, 4]; */

      // let numbers = [1, 2, 3, 4];

      /*while (numbers.length > 0) {
        numbers.pop();
      }
      console.log(numbers);*/

      /*while (numbers.length > 0) {
        numbers.shift();
      }
      console.log(numbers);*/

      /*numbers.splice(0,numbers.length);
      console.log(numbers);*/

      /* Another solution from LS

         numbers.length = 0;

/* 2. What will the following code output?

      console.log([1, 2, 3] + [4, 5]); */

      // it will output [1, 2, 34, 5]

/* 3. What will the following code output?

      let str1 = "hello there";
      let str2 = str1;
      str2 = "goodbye!";
      console.log(str1); */

      /* hello there  will be be returned. */

/* 4. What will the following code output?

      let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
      let arr2 = arr1.slice();
      arr2[0].first = 42;
      console.log(arr1); */

      /* [{ first: 42 }, { second: "value2" }, 3, 4, 5] will be returned. This is because slice() returns makes a shallow copy which means that the objects
          are not copied but used as pointers top the oiriginal objects stored in memory. When I change the value in arr2, that value also changes in arr1.*/

/* 5. The following function unnecessarily uses two return statements to return boolean values. 
      Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?

      function isColorValid(color) {
        if (color === "blue" || color === "green") {
          return true;
        } else {
          return false;
        }
      } 

      Try to come up with at least two different solutions.*/

      /*function isColorValid(color) {
        return color === "blue" || color === "green"
      } 

      console.log(isColorValid("green")); */

      /*function isColorValid(color) {
        var cols = [];
        if (color ==='blue' || color === 'green') {
          cols.push(color);
        } 
        return cols.length >= 1;
      }

      console.log(isColorValid('blue'));*/

      /* Other LS solutions

        const isColorValid = color => color === "blue" || color === "green";

        const isColorValid = color => ["blue", "green"].includes(color); */

/* 6. Examine the following code carefully. Can you identify all of the variables, primitive values, and objects that exist when this code executes?

      let arr = [1, 2, 3];
      let newArr = arr;

      const num = arr[0];
      let newNum = num;

      function double(num) {
        return num * 2;
      }

      double(newNum); */

      /* objects are arr, double.
         variables are arr, newArr, num, newNum, double, num
         primitive values  are 1, 2, 3, num, arr[0] value and index, newNum, 2, newNum in function being invoked. */

