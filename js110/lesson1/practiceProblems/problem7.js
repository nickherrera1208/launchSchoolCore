// What is the return value of map in the following code? Why?

['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

/* [undefined, 'bear'] gets returned because it has a length greater than 3. undefined is returned because the statement checking the length of the element length is false and since it is not true, meaning no element that fits criteria, it will output undefined. */