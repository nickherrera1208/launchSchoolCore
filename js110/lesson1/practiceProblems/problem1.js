//What is the return value of the filter method call below? Why?

[1, 2, 3].filter(num => 'hi');

/* the return value is [1, 2, 3]. This is because the filter method checks truthiness of the callback functions return value. since the string 'hi' is truthy, it will return a new array of all elements of original array. */

