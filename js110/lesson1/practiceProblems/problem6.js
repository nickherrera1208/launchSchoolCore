// How does Array.prototype.fill work? Is it destructive? How can we find out?

let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);

// fill replaces elements of the array with 1. it is destructive. this method and its arguments say to fill the array with 1 starting from index 1 up to index 5. 