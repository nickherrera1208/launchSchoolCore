/*****************************************************************Exercises***************************************************************************************/

/* 1. What will the following code log to the console and why? Don't run it until you have tried to answer.

      let num = 5;

      function myFunc() {
        num = 10;
      }

      myFunc();
      console.log(num); */

      // The code logs 10 to the console.

/* 2. What will the following code log to the console and why? Don't run it until you have tried to answer.

      let num = 5;

      function myFunc() {
        console.log(num);
        num = 10;
      }

      myFunc();
      console.log(num); */

      // The code logs 5 and then 10 to the console.

/* 3. What will the following code log to the console and why? Don't run it until you have tried to answer.

      let num = 5;

      function myFunc() {
      let num = 10;
      }

      myFunc();
      console.log(num); */

      // The code logs 5 to the console.

/* 4. What will the following code log to the console and why? Don't run it until you have tried to answer. 

      let num = 5;

      function myFunc() {
        console.log(num);
        let num = 10;
      }

      myFunc();
      console.log(num); */


      /* The code returns a reference error. Remember variables declared with let do noinitialize until after the code runs, meaning that
         the new variable in the function is trying to be referenced before it is initialized. */

/* 5. What will the following code log to the console and why? Don't run it until you have tried to answer.

      let num = 5;

      function myFunc(num) {
        num = 10;
      }

      myFunc();
      console.log(num); */

      // The code outputs 5. 

/* 6. What will the following code log to the console and why? Don't run it until you have tried to answer.

      let num = 1;

      while (num < 3) {
        num += 1;
      }

      console.log(num); */

      // The code outputs 3.

/* 7. What will the following code log to the console and why? Don't run it until you have tried to answer.

      let num = 1;

      while (num < 3) {
        let num = 5;
        num += 1;
      }

      console.log(num); */

      // This code results in an infinite loop. This is because it it referencing the new variable declared with the same name and not the global num. 