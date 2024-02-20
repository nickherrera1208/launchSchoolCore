// One of the most frequently used real-world string operations is that of "string substitution," where we take a hard-coded string and modify it with various parameters from our program.

// Given this previously seen family object, print the name, age, and gender of each family member:

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

// Each output line should follow this pattern:

// (Name) is a (age)-year-old (male or female).

// let names = Object.keys(munsters);

// let ages = [];
// let gender = [];
// for (let people in munsters) {
//   ages.push(munsters[people].age);
//   gender.push(munsters[people].gender);
// }

// for (let i = 0; i < names.length; i++) {
//   console.log(`${names[i]} is a ${ages[i]} year old ${gender[i]}.`);
// }

/* LS Answer

Object.entries(munsters).forEach(entry => {
  let name = entry[0];
  let age = entry[1]['age'];
  let gender = entry[1].gender;

  console.log(`${name} is a ${age}-year-old ${gender}.`);
});

*/

