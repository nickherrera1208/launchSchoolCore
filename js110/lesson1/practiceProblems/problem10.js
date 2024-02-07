// Pick out the minimum age from our current Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let agesArray = Object.values(ages);
let minimumAge = Math.min(...agesArray);

console.log(minimumAge);

/* note: ... turns an array into just the elements. this means min method see the input as min(32, 30, 5843, 10, etc.) without square brackets */

// ... is called the spread operator. 