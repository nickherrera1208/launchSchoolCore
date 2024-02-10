/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable max-len */
/* 1. Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

      let advice = "Few things in life are as important as house training your pet dinosaur."; */
     
      /*let advice = "Few things in life are as important as house training your pet dinosaur.";
      let newText = advice.replace(/important/g, 'urgent');
      console.log(newText);*/

/* 2. The Array.prototype.reverse method reverses the order of elements in an array, and Array.prototype.sort 
      can rearrange the elements in a variety of ways, including descending. Both of these methods mutate the 
      original array as shown below. Write two distinct ways of reversing the array without mutating the original 
      array. Use reverse for the first solution, and sort for the second. */

      /*let numbers = [1, 2, 3, 4, 5];
      numbers.reverse();
      console.log(numbers); // [ 5, 4, 3, 2, 1 ]

      numbers = [1, 2, 3, 4, 5];
      numbers.sort((num1, num2) => num2 - num1);
      console.log(numbers); // [ 5, 4, 3, 2, 1 ]*/

      /*let numbers = [1, 2, 3, 4, 5];
      numbers.slice().reverse();
      console.log(numbers);
      console.log(numbers.slice().reverse());

      console.log([...numbers].reverse());
      console.log(numbers);*/

      /* LS Answers

      let numbers = [1, 2, 3, 4, 5];
      let reversedArray = numbers.slice().reverse();
      console.log(reversedArray); // [5, 4, 3, 2, 1]
      console.log(numbers); // [1, 2, 3, 4, 5]

      let numbers = [1, 2, 3, 4, 5];
      let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
      console.log(sortedArray); // [5, 4, 3, 2, 1]
      console.log(numbers); // [1, 2, 3, 4, 5] */

      /*Bonus Question: Can you do it using the Array.prototype.forEach() method? */

      /*let numbers = [1, 2, 3, 4, 5];
      numbers.slice().reverse().forEach((num) => console.log(num));*/

      /*LS Answer

      let numbers = [1, 2, 3, 4, 5];
      let reversedArray = [];

      numbers.forEach((number) => {
        reversedArray.unshift(number);
      });

      console.log(reversedArray); // [5, 4, 3, 2, 1]
      console.log(numbers); // [1, 2, 3, 4, 5] */

/* 3. Given a number and an array, determine whether the number is included in the array.

      let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

      let number1 = 8;  // false
      let number2 = 95; // true */

      /*let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

      let number1 = numbers.includes(8);
      let number2 = numbers.includes(95);*/

/* 4. Starting with the string:

      let famousWords = "seven years ago...";

      show two different ways to put the expected "Four score and " in front of it. */

      /* let famousWords = "seven years ago...";

      let addWords = 'Four score and ' + famousWords;
      console.log(addWords);

      let concatWords = 'Four score and '.concat(famousWords);
      console.log(concatWords); */

/* 5. Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5]. */

      /*let numbers = [1, 2, 3, 4, 5];
      numbers.splice(2,1);
      console.log(numbers);*/

/* 6. Suppose we build an array like this:

      let flintstones = ["Fred", "Wilma"];
      flintstones.push(["Barney", "Betty"]);
      flintstones.push(["Bambam", "Pebbles"]);

      This code will create a nested array that looks like this:

      ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

      Nesting data structures like we do here is commonplace in JavaScript and programming in general. 
      We'll explore this in much greater depth in a future Lesson.

      Create a new array that contains all of the above values, but in an un-nested format:

      [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ] */

      /*let flintstones = ["Fred", "Wilma"];
      flintstones.push(...["Barney", "Betty"]);
      flintstones.push(...["Bambam", "Pebbles"]);
      console.log(flintstones);*/

      /* LS Solutions 

      flintstones = [].concat(...flintstones);

      Solution with reduce

      flintstones = flintstones.reduce((accum, element) => {
        return accum.concat(element);
      }, []);

      Solution with forEach

      let newFlintstones = [];
      flintstones.forEach(element => {
        newFlintstones = newFlintstones.concat(element);
      });

      Solution with flat

      let newFlintstones = flintstones.flat(); */

/* 7. Consider the following object:

      let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

      Create an array from this object that contains only two elements: Barney's name and Barney's number:

      [ 'Barney', 2 ] */

      /*let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

      let objArray = Object.entries(flintstones).filter(vals => vals[0] === "Barney").shift();
      console.log(objArray);*/

/* 8. How would you check whether the objects assigned to variables numbers and table below are arrays?

      let numbers = [1, 2, 3, 4]; // true
      let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false */

      /*let numbers = [1, 2, 3, 4]; 
      let table = { field1: 1, field2: 2, field3: 3, field4: 4 };

      console.log(Array.isArray(numbers));
      console.log(Array.isArray(table));*/

/* 9. Back in the stone age (before CSS), we used spaces to align things on the screen. 
      If we have a 40-character wide table of Flintstone family members, 
      how can we center the following title above the table with spaces?

      let title = "Flintstone Family Members"; */

      /*let title = "Flintstone Family Members";
      let numSpaces = Math.floor((40 - title.length) / 2);

      console.log(title.padStart(numSpaces + title.length));*/

/* 10. Write a one-line expression to count the number of lower-case t characters in each of the following strings:

      let statement1 = "The Flintstones Rock!";
      let statement2 = "Easy come, easy go."; */

      /*let statement1 = "The Flintstones Rock!";
      let statement2 = "Easy come, easy go.";

      console.log(statement1.split('t').length - 1);
      console.log(statement2.split('t').length - 1);*/

      /* LS Answers

      statement1.split('').filter(char => char === 't').length;
      statement2.split('').filter(char => char === 't').length; */
