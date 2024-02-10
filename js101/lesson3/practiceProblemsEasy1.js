/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* 1. Will the code below raise an error? 

let numbers = [1, 2, 3];
numbers[6] = 5; */

// this code will not output an error, it will create the variable at element 6 and fill in the other values as undefined. 

/* Bonus: 

let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return? */

/* It will not return anything but if called upon the variable at 4th index will return undefined. */

/* 2. How can you determine whether a given string ends with an exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false */

/*let str1 = "Come over here!"; 
let str2 = "What's up, Doc?"; 

console.log(str1[str1.length-1].includes('!'));
console.log(str2[str2.length-1].includes('!'));*/

// I can also use endsWith() function. 

/* 3. Determine whether the following object of people and their age contains an entry for 'Spot': */

/*let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

if (Object.keys(ages).includes('Spot')) {
  console.log('Spot is in the keys.');
} else if (Object.values(ages).includes('Spot')) {
  console.log('Spot is in the values.');
} else console.log('Spot is not in this object'); */

// an easier way is to use hasOwnProperty on the ages object. ages.hasOwnProperty("Spot");

/* 4. Using the following string, create a new string that contains all lowercase letters except for the first character, 
      which should be capitalized. (See the example output.)

      let munstersDescription = "the Munsters are CREEPY and Spooky.";
      => The munsters are creepy and spooky. */

     /* let munstersDescription = "the Munsters are CREEPY and Spooky.";

      munstersDescription = munstersDescription[0].toUpperCase() + munstersDescription.toLowerCase().slice(1,);
      console.log(munstersDescription); */

     /* here is another way:  munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase(); */

/* 5. What will the following code output?

      console.log(false == '0');
      console.log(false === '0'); */

      // true and false. 

/* 6. We have most of the Munster family in our ages object:

      let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

      Add entries for Marilyn and Spot to the object:

      let additionalAges = { Marilyn: 22, Spot: 237 }; */

      /*let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

      let additionalAges = { Marilyn: 22, Spot: 237 };

      ages = Object.assign(ages, additionalAges);

      console.log(ages);*/

/* 7. Determine whether the name Dino appears in the strings below -- check each string separately:

      let str1 = "Few things in life are as important as house training your pet dinosaur.";
      let str2 = "Fred and Wilma have a pet dinosaur named Dino."; */

      /*let str1 = "Few things in life are as important as house training your pet dinosaur.";
      let str2 = "Fred and Wilma have a pet dinosaur named Dino."; 

      console.log(str1.includes('Dino'));
      console.log(str2.includes('Dino'));*/

/* 8. How can we add the family pet, "Dino", to the following array? */

/*let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push('Dino');
console.log(flintstones); */

/* 9. In the previous problem, our first answer added 'Dino' to the array like this:

      let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
      flintstones.push("Dino");

      How can we add multiple items to our array? ('Dino' and 'Hoppy') */

      /*let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
      flintstones.push("Dino", "Hoppy");
      console.log(flintstones);*/

/* 10. Return a new version of this sentence that ends just before the word house. 
      Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.

      let advice = "Few things in life are as important as house training your pet dinosaur.";

      // Expected return value:
      // => 'Few things in life are as important as ' */

      /*let advice = "Few things in life are as important as house training your pet dinosaur.";

      advice = advice.slice(0, advice.indexOf('house'));
      console.log(advice);*/

