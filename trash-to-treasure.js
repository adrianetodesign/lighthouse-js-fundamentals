/*
Trash to Treasure
Adrian To
22/12/2021

We need to complete a function called smartGarbage(trash, bins), 
which will be responsible for increasing the garbage count for 
waste, recycling, or compost depending on what trash is submitted.

Complete the logic in the function smartGarbage.

Our function will receive two arguments:

The first argument, trash, is a string that will tell our function 
what type of item is being submitted.

The second argument, bins, is an object containing three properties 
(waste, recycling, and compost), which hold some numerical value. 
Our function must increase the correct value in the bins object, 
and then return the newly updated object.
*/

const smartGarbage = function(trash, bins) {
  bins[trash] += 1;
  return bins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));