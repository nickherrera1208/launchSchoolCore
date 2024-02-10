/*****************************************************************Exercises***************************************************************************************/

/* 1. What will the following code log to the console and why? Don't run it until you have tried to answer.

      let myWord = 'Hello';
      myWord.concat(' there.');

      console.log(myWord); */

      // Hello will be logged. concat does not change the original string, it outputs a new one. 

/* 2. What will the following code log to the console and why? Don't run it until you have tried to answer.

      let myWord = 'Hello';
      myWord.repeat(3);
      console.log(myWord);
      myWord.replace('H', 'J');
      console.log(myWord);
      myWord.toUpperCase();
      console.log(myWord); */

      /* The code will output Hello for all three console logs. This is because the original string myWord is immutable and the method calls do not alter it
         but will output a new string. */

/* 3. What will the following code log to the console and why? Don't run it until you have tried to answer.

      let myWords = ['Hello'];
      myWords.push('Goodbye');

      console.log(myWords); */

      // ['Hello', 'Goodbye'] will be outputted. 

/* 4. What will the following code log to the console and why? Don't run it until you have tried to answer. 

      let myWords = ['Hello'];
      myWords.concat(['Goodbye']);

      console.log(myWords); */

      // This outputs ['Hello] because concat returns a new array and doesn't mutate the original myWords. 

/* 5. What will the following code log to the console and why? Don't run it until you have tried to answer.
      
      let myWords = ['Hello'];
      myWords[0].toUpperCase();

      console.log(myWords); */

      // ['Hello'] is the output. This is because strings are pimitive and therefore immutable. toUpperCase() doesn't do anything here. 

  /* 6. What will the following code log to the console and why? Don't run it until you have tried to answer. 

        let myWords = ['Hello'];
        myWords[0] = myWords[0].toUpperCase();

        console.log(myWords); */

        // HELLO is outputted because the element in myWords array is being reassigned to a new string. 



