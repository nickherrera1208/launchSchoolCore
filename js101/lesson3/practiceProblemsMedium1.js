/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable max-len */
// eslint-disable-next-line max-len
/* 1. Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.
      For this practice problem, write a program that outputs The Flintstones Rock! 10 times, 
      with each line indented 1 space to the right of the line above it. The output should start out like this:

      The Flintstones Rock!
       The Flintstones Rock!
        The Flintstones Rock!
         The Flintstones Rock!
          ... */

   /* let flintstones = 'The Flintstones Rock!';
    let counter = 0;
    let spaces = 1;
    while (counter < 10) {
      console.log(flintstones.padStart(spaces + flintstones.length));
      counter += 1;
      spaces += 1;
    } */

    /* LS Answer

    for (let padding = 0; padding <= 9; padding++) {
      console.log(" ".repeat(padding) + "The Flintstones Rock!");
    } */

/* 2. Starting with the string:

      let munstersDescription = "The Munsters are creepy and spooky.";

      Return a new string that swaps the case of all of the letters:

      `tHE mUNSTERS ARE CREEPY AND SPOOKY.`; */

      /*let munstersDescription = "The Munsters are creepy and spooky.";
      let newMunstersDescription = "";
      
      
        for (let i = 0; i < munstersDescription.length; i++) {
          if (munstersDescription[i].toUpperCase() === munstersDescription[i]) {
            newMunstersDescription += munstersDescription[i].toLowerCase();
          } else if (munstersDescription[i].toLowerCase() === munstersDescription[i]) {
            newMunstersDescription += munstersDescription[i].toUpperCase();
          }
        }
      console.log(newMunstersDescription); */

      /* LS Answer 

        console.log(
          munstersDescription
            .split("")
            .map(function (char) {
              if (char === char.toUpperCase()) {
                return char.toLowerCase();
              } else {
                return char.toUpperCase();
              }
            })
            .join("")
        ); */

/* 3. Alan wrote the following function, which was intended to return all of the factors of number:

      function factors(number) {
        let divisor = number;
        let factors = [];
        do {
          if (number % divisor === 0) {
            factors.push(number / divisor);
          }
          divisor -= 1;
        } while (divisor !== 0);
        return factors;
      }

      Alyssa noticed that this code would fail when the input is 0 or a negative number, and asked Alan to change the loop. 
      How can he make this work without using a do/while loop? 
      Note that we're not looking to find the factors for 0 or negative numbers, 
      but we want to handle it gracefully instead of raising an exception or going into an infinite loop.

      Bonus: What is the purpose of number % divisor === 0 in that code? */ 

     /* function factors(number) {
        let divisor = number;
        let factors = [];
        while (divisor !== 0 && number > 0) {
          if (number % divisor === 0) {
            factors.push(number / divisor);
          }
          divisor -= 1;
        } 
        return factors;
      }

      console.log(factors(10)); */

      /* The purpose of number % divisor === 0 is to chekc if the number can get divided by the divisor evenly. 
         If so, this means that it is a factor of the number. */

/* 4. Alyssa was asked to write an implementation of a rolling buffer. You can add and remove elements from a rolling buffer. 
      However, once the buffer becomes full, any new elements will displace the oldest elements in the buffer.

      She wrote two implementations of the code for adding elements to the buffer. 
      In presenting the code to her team leader, she said "Take your pick. Do you prefer push() or concat() for modifying the buffer?".

      Is there a difference between these implementations, other than the method she used to add an element to the buffer? 
      You may assume that newElement will always be a primitive value. 

      function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
        buffer.push(newElement);
        if (buffer.length > maxBufferSize) {
          buffer.shift();
        }
        return buffer;
      }
      
      function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
        buffer = buffer.concat(newElement);
        if (buffer.length > maxBufferSize) {
          buffer.shift();
        }
        return buffer;
      } */

    /* the functions return the same value but the first function mutates the buffer argument whereas the second function reassigns the buffer variable. */

/* 5. What will the following two lines of code output?

      console.log(0.3 + 0.6);
      console.log(0.3 + 0.6 === 0.9);

      Don't look at the solution before you answer. */

      /* 0.899999999999999 and false. Floating point numbers on computers aren't precise and can return unexpected results. */

      // a way to solve this is by using parseInt(). ex: console.log((parseFloat(.3) + parseFloat(.6)).toFixed(2));

/* 6. What do you think the following code will output?

      let nanArray = [NaN];

      console.log(nanArray[0] === NaN); 

      Bonus: How can you reliably test if a value is NaN? */

      /* The code will output false because == and === cannot be used for NaN values. 
         Using Number.isNaN() will be best.*/

/* 7. What is the output of the following code?

      let answer = 42;

      function messWithIt(someNumber) {
        return (someNumber += 8);
      }

      let newAnswer = messWithIt(answer);

      console.log(answer - 8); */


      /* the code will output 34. */

/* 8. One day, Spot was playing with the Munster family's home computer, and he wrote a small program to mess with their demographic data:

      let munsters = {
        Herman: { age: 32, gender: "male" },
        Lily: { age: 30, gender: "female" },
        Grandpa: { age: 402, gender: "male" },
        Eddie: { age: 10, gender: "male" },
        Marilyn: { age: 23, gender: "female" },
      };

      function messWithDemographics(demoObject) {
        Object.values(demoObject).forEach(familyMember => {
          familyMember["age"] += 42;
          familyMember["gender"] = "other";
        });
      } 

      After writing this function, he typed the following code:

      messWithDemographics(munsters);

      Before Grandpa could stop him, Spot hit the Enter key with his tail. Did the family's data get ransacked? Why or why not?

      /*  The data did change because objects are mutable and passed by reference. */

/* 9. Function and method calls can take expressions as arguments. 
      Suppose we define a function named rps as follows, which follows the classic rules of the rock-paper-scissors game, 
      but with a slight twist: in the event of a tie, it just returns the choice made by both players. 

      function rps(fist1, fist2) {
        if (fist1 === "rock") {
          return fist2 === "paper" ? "paper" : "rock";
        } else if (fist1 === "paper") {
          return fist2 === "scissors" ? "scissors" : "paper";
        } else {
          return fist2 === "rock" ? "rock" : "scissors";
        }
      }

      // What does the following code output?

      console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock")); */

      /* the code returns paper. */

/* 10. Consider these two simple functions:

        function foo(param = "no") {
          return "yes";
        }

        function bar(param = "no") {
          return param === "no" ? "yes" : "no";
        }

        What will the following function invocation return?

        bar(foo()); */

        /* it will return no */