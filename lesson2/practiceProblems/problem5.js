// Consider the following nested object:

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

// Compute and display the total age of the male members of the family.

let maleMunsters = [];
for (let key in munsters) {
  if (munsters[key].gender === 'male') {
    maleMunsters.push(munsters[key].age);
  }
}

let sumMaleAges = maleMunsters.reduce((a,b) => a + b);
console.log(sumMaleAges);

/* LA Answer

let totalMaleAge = 0;

for (let member in munsters) {
  if (munsters[member]['gender'] === 'male') {
    totalMaleAge += munsters[member].age;
  }
}

console.log(totalMaleAge); // => 444

*/