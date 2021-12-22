/*
Looping Range
Adrian To
22/12/2021
*/

const range = function(start, end, step) {
  let finalArray = [];
  if (start == undefined || end == undefined || step == undefined) {
    return undefined;
  } else if (start > end) {
    return undefined;
  } else if (step <= 0) {
    return undefined;
  } else {
    for (let i = start; i <= end; i += step) {
      finalArray.push(i);
    }
  }
  return finalArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));