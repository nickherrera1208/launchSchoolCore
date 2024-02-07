// What is the callback's return value in the following code? Also, what is the return value of every in this code?

[1, 2, 3].every(num => {
  return num = num * 2;
});

/* the return values of the callback are 2, 4, and 6. even though the parameter is being assigned, the expression on the right side of it will be returned. 

the every method checks for truthiness and will output true because the numbers are truthy. */