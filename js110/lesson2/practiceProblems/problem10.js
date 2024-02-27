// Perform the same transformation of sorting the subarrays we did in the previous exercise with one difference; sort the elements in descending order.

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

for (let i = 0; i < arr.length; i++) {
  arr[i].sort().reverse();
  if (typeof arr[i][0] === 'number') {
    arr[i].sort((a,b) => a - b).reverse();
  }
}

console.log(arr);

//  LS Answer

/*

arr.map(subArray => {
  return subArray.slice().sort((a, b) => {
    if (a > b) return -1;
    if (b > a) return 1;
    return 0;
  });
});

// => [ [ 'c', 'b', 'a' ], [ 11, 2, -3 ], [ 'green', 'blue', 'black' ] ]

*/

