/*****************************************************************Exercises***************************************************************************************/

/* 1. What will the following code log to the console and why? Don't run it until you have tried to answer.

      function changeMyWord(word) {
        console.log(word);
        word = word.toUpperCase();
      }

      let myWord = 'Hello';
      changeMyWord(myWord);
      console.log(myWord); */

// The code logs Hello and Hello. 

/* 2. What will the following code log to the console and why? Don't run it until you have tried to answer.

      function changeMyWord(word) {
        console.log(word);
        word = word.toUpperCase();
        return word;
      }

      let myWord = 'Hello';
      myWord = changeMyWord(myWord);
      console.log(myWord); */

      //  The code logs Hello and HELLO.

/* 3. What will the following code log to the console and why? Don't run it until you have tried to answer.

      function changeMyWord(word) {
        console.log(word);
        word = word.toUpperCase();
        return word;
      }

      let myWord = 'Hello';
      let myOtherWord = changeMyWord(myWord);
      console.log(myWord);
      console.log(myOtherWord); */

      // The code logs Hello, Hello, and HELLO.

/* 4. What will the following code log to the console and why? Don't run it until you have tried to answer.

      function changeMyWords(words) {
        console.log(words);
        words[0] = 'Hi';
      }

      let myWords = ['Hello', 'Goodbye'];
      changeMyWords(myWords);
      console.log(myWords); */

      // The code will log Hello and Goodbye in array and then Hi and Goodcye in array.  

/* 5. What will the following code log to the console and why? Don't run it until you have tried to answer.

      function changeMyWords(words) {
        console.log(words);
        words = ['Hi', 'Goodbye'];
      }

      let myWords = ['Hello', 'Goodbye'];
      changeMyWords(myWords);
      console.log(myWords); */

      // The code will log an array with Hello and Goodbye twice.
      
 