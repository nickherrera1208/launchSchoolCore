// What is the return value of map in the following code? Why?

[1, 2, 3].map(num => {
  num * num;
});

/* the return value is [undefined, undefined, undefined]. this is because there is no return statement for the callback function inside of the curly braces. */