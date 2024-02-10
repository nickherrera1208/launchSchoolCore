//  ***********************************************************************Exercises*******************************************************************************

/* 2. Write a program named "age.js" that includes someone's age and then calculates and reports the future age in 10, 20, 30, and 40 years. Below is the output for 
      someone 20 years old. 
   
   You are 20 years old.
   In 10 years, you will be 30 years old.
   In 20 years, you will be 40 years old.
   In 30 years, you will be 50 years old.
   In 40 years, you will be 60 years old. */
let rlSync = require('readline-sync');
// let someones_age = Number(rlSync.question('How old are you? '));
// let someones_age = 33;
// console.log(`Your are ${someones_age} years old.`);
// console.log(`In 10 years, you will be ${someones_age + 10} years old.`);
// console.log(`In 20 years, you will be ${someones_age + 20} years old.`);
// console.log(`In 30 years, you will be ${someones_age + 30} years old.`);
// console.log(`In 40 years, you will be ${someones_age + 40} years old.`);
// New Code Block -- uncomment let vars to run code above
/* My version 
let ages = [10, 20, 30, 40];
let someones_age = Number(rlSync.question('How old are you? '));
for (let i =0; i < ages.length; i++){
  console.log(`In ${ages[i]} years, you will be ${someones_age + ages[i]} years old.`);
} */

/* LS Version
let readlineSync = require('readline-sync');
let age = readlineSync.question('How old are you? ');
age = parseInt(age);
console.log(`You are ${age} years old.`);
for (let future = 10; future <= 40; future += 10) {
  console.log(`In ${future} years, you will be ${age + future} years old.`);
} */ 

/* 3. What happens when you run the following program? Why do we ge that result? 

   {
    let foo = 'bar';
   }

   console.log(foo); */

/*  An error occurs that foo is not defined. This is because the scope of foo is not global. */

/* 4. What happens when you run the following code? Why? 

      const NAME = 'Victor';
      console.log('Good Morning, ' + NAME);
      console.log('Good Afternoon, ' + NAME);
      console.log('Good Evening, ' + NAME);

      NAME = 'Joe';
      console.log('Good Morning, ' + NAME);
      console.log('Good Afternoon, ' + NAME);
      console.log('Good Evening, ' + NAME); */
    
/* An error occurs because a const variable cannot be changed. 

/* 5. Take a look at this code snippet:

   let foo = 'bar';
   {
    let foo = 'qux';
   }

   console.log(foo); 

   What does this program log to the console? Why? */

/* The console outputs 'bar'. This is because foo was declared globally and the console was executed outside of the code block so it only recognizes the 
   original value. */ 

/* 6. Will this program produce an error when run? Why or why not? 

   const FOO = 'bar';
   {
    const FOO = 'qux';
   }

   console.log(FOO); */

/* The code will not output an error. Even though a constant variable is reassigned, it is done out of scope which makes it a new variable on its own. */ 