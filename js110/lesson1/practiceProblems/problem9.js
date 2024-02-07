// Add up all of the ages from the Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let total = 0;
let ageArray = Object.values(ages);

for (let age in ageArray) {
  total += ageArray[age];
}

console.log(total);

/* LS Answer

let totalAges = 0;
Object.values(ages).forEach(age => totalAges += age);
totalAges; // => 6174 */