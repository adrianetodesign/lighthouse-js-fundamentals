/*
Looping Range
Adrian To
22/12/2021

When this function is given an array and a value, 
it should return the index of the last time the value 
occurs in the array. If the value never occurs, the 
function should return -1.
*/

const lastIndexOf = function(arr, num) {
  let lastIndex = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      lastIndex = i;
    }
  }
  return lastIndex;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);