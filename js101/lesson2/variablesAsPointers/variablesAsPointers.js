/*****************************************************************Exercises***************************************************************************************/

/* 1. What will the following code log to the console and why? Don't run it until you have tried to answer.

      let myWord = 'Hello';
      let myOtherWord = myWord;

      console.log(myWord);
      console.log(myOtherWord); */

      // Hello and Hello will be logged.

/* 2. What will the following code log to the console and why? Don't run it until you have tried to answer.

      let myWord = 'Hello';
      let myOtherWord = myWord;
      myWord = 'Goodbye';

      console.log(myWord);
      console.log(myOtherWord); */

      // Goodbye and Hello get logged. 

/* 3. What will the following code log to the console and why? Don't run it until you have tried to answer.

      let myWords = ['Hello', 'Goodbye'];
      let myOtherWords = myWords;
      myWords[0] = 'Hi';

      console.log(myWords);
      console.log(myOtherWords); */

      // Hi, Goodbye get logged twice.

/* 4. What will the following code log to the console and why? Don't run it until you have tried to answer.

      let myWords = ['Hello', 'Goodbye'];
      let myOtherWords = myWords;
      myWords = ['Hi', 'Bye'];

      console.log(myWords);
      console.log(myOtherWords); */

      // Hi Bye and then Hello Goodbye get logged. 

/* 5. What will the following code log to the console and why? Don't run it until you have tried to answer.

      let myWords = ['Hello', 'Goodbye'];
      let myWord = myWords[0];
      myWords[0] = 'Hi';

      console.log(myWords);
      console.log(myWord); */

      // Hi Goodbye and Hello get logged. 

/* 6. What will the following code log to the console and why? Don't run it until you have tried to answer.

      let myWords = ['Hello', 'Goodbye'];
      let myWord = 'Hi';
      myWords[0] = myWord;
      myWord = 'Hello';

      console.log(myWords);
      console.log(myWord); */

      // Hi Goodbye and Hello get logged. 

