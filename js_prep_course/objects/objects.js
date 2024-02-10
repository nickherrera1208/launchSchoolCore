//  ***********************************************************************Exercises*******************************************************************************

/* 1. Given the following code, how can you access the name of the person? 

      let person = {
      name:       'Bob',
      occupation: 'web developer',
      hobbies:    'painting',
    }; */

    // personal.name;

/* 2. Which of the following values are valid keys for an object? */

    /* 1, '1', 'true', 'hello world', undefined, true. All of these are valid. Any non-string values will be converted to strings. */

/* 3. Use object literal syntax (e.g., { key: value, ... } notation) to create an object that behaves as an array in a for statement. The object should contain 
      at least 3 elements. You should place your code between the braces in the let statement: */

      /* let myArray = { 
        0 : 4, 1 : 34, 2 : 42, length : 3
      };

      for (let i = 0; i < myArray.length; i += 1) {
      console.log(myArray[i]);
      } */

/* 4. Create an array from the keys of the object obj below, with all of the keys converted to uppercase. Your implementation must not mutate obj. */

      /* let obj = {
        b: 2,
        a: 1,
        c: 3,
      };

      let arrObj = Object.keys(obj);

      arrObj = arrObj.map(i => i.toUpperCase());

      console.log(arrObj); */

/* 5. Create a new object named myObj that uses myProtoObj as its prototype. */

      /* let myProtoObj = {
        foo: 1,
        bar: 2,
      }; 

      let myObj = Object.create(myProtoObj); 
      
      myObj.qux = 3; */

/* 6. Which of the following values are primitive values? Which are objects? Which are neither? 

      "foo" primitive
      3.1415 primitive
      [ 'a', 'b', 'c' ] object
      false primitive
      foo neither
      function bar() { return "bar"; } object
      undefined primitive
      { a: 1, b: 2 } object */

/* 7. Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets: */

      /* let objKeys = Object.keys(myObj);
      objKeys.forEach(function(key) {
        console.log(key);
      });

      for (let key in myObj) {
        console.log(key);
      } 
       Without running this code, can you determine whether these two snippets produce the same output? Why? */
// The first only returns the keys of its own. 
// the second snippet iterates over all keys in myObj, including the inherited ones from myProtoObj. 

/* 8. Create a function that creates and returns a copy of an object. The function should take two arguments: the object to copy and an array of the keys that 
   you want to copy. Do not mutate the original object.

   The function should let you omit the array of keys argument when calling the function. If you do omit the argument, the function should copy all of the 
   existing keys from the object. */

   /* myObj = { a: 'foo', b: 'bar', c: 'foobar' }

   function obj(objCopy, arr=Object.keys(objCopy)){
    let newObj = Object.freeze(objCopy);
    
    if (arr){
      let dict = {}
      for (let i = 0; i < arr.length; i++){
        dict[arr[i]] = objCopy[arr[i]];
        
      }return dict;
    }
    return newObj;
   }

   console.log(obj(myObj, ['b'])); */

/* 9. What does the following program log to the console? Why?

      let foo = {
        a: 'hello',
        b: 'world',
      };

      let qux = 'hello';

      function bar(argument1, argument2) {
        argument1.a = 'hi';
        argument2 = 'hi';
      }

      bar(foo, qux);

      console.log(foo.a);
      console.log(qux);

hi and hello are outputted. this is because the object is mutable and thhe string value of qux is primitive. argument2 become a new variable rather then reassigning
a new value to qux. */

/* 10. How many primitive values are there in the following expression? Identify them. How many objects are there in the expression? Identify those objects.

    [1, 2, ["a", ["b", false]], null, {}] 
    6*/

/* 11. Write some code to replace the value 6 in the following object with 606: */

 /* let obj = {
    foo: { a: "hello", b: "world" },
    bar: ["example", "mem", null, { xyz: 6 }, 88],
    qux: [4, 8, 12]
  };

  for (let i = 0; i < obj.bar.length; i++){
    if ((typeof(obj.bar[i]) === "object") && (obj.bar[i] != null)){
      obj.bar[i] = 606;
    }
  }
   console.log(obj); */

//  12. Consider the following code:

/*function foo(bar) {
  console.log(bar, bar, bar);
}
let bar = foo;

foo("hello"); // should print "hello hello hello"
bar("hi");    // should print "hi hi hi" */

// As written, this code will raise an error on line 6. Without creating a new function or changing lines 5 or 6, update this code to work as intended. 

// 13. Consider the following code: 

/*function foo(bar) {
  console.log(bar());
}

// foo();    // Should print 'Welcome'
// foo();    // Should print 3.1415
// foo();    // Should print [1, 2, 3]

foo(function(){return "Welcome"});
foo(function(){return 3.1415});
foo(function(){return [1, 2, 3]});*/
// As written, this code will raise an error on line 5. Without modifying foo, update this code to print the desired text.

/* 14. Identify all of the variables, object property names, primitive values, and objects shown in the following code (assume the code has not been executed). 
       Don't panic if you miss a few items - this exercise is more challenging than it looks.

        function hello(greeting, name) {
          return greeting + ' ' + name;
        }

        function xyzzy() {
          return { a: 1, b: 2, c: [3, 4, 5], d: {} };
        }

        const howdy = hello('Hi', 'Grace');
        let foo = xyzzy();      */

      //  variables are greeting, name, howdy, foo, hello, xyzzy. object property names are a,b,c,d. primitive values are grace, hi, 1,2,3,4,5 and ' . Objects are hello, greeting, name, xyzzy, 
      //  a,b,c,d and their values, howdy, foo, hi, grace

/* 15. Identify all of the variables, object property names, primitive values, and objects in the following code. This problem is even more challenging than the previous one.

        function bar(arg1, arg2) {
          let foo = 'Hello';
          const qux = {
            abc: [1, 2, 3, [4, 5, 6]],
            def: null,
            ghi: NaN,
            jkl: foo,
            mno: arg1,
            pqr: arg2,
          };

          return qux;
        }

        let result = bar('Victor', 'Antonina');

       variables are bar, arg1, arg2, foo, qux, result. object property names are abc and its array indexes, def, ghi, jkl, mno, pqr. primitive values are all values of keys except arg1 and arg2, 
       victor, hello, and anotonina. all property names are primitive since they are strings. objects are bar, the arrays, and qux. */