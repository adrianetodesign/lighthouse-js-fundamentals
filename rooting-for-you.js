/*
We're Rooting for You!
Adrian To
22/12/2021

Complete the logic in the function judgeVegetable.

For this challenge, we'll need to implement a function called 
judgeVegetable()that will decide which vegetable is best based 
on a given judging characteristic. Our function will receive 
two parameters: a list of veggies(as an array of objects), and 
a characteristic to judge the veggies by (in the case of a 
tomato, either redness or plumpness).

Our function must return the name of the person who submitted 
(vegetables.submitter) the vegetable with the highest ranking 
in the provided category.
*/

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

const judgeVegetable = function(vegetables, metric) {
  let winner = "";
  let highest = 0;
  for (let i =0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > highest) {
      winner = vegetables[i].submitter;
      highest = vegetables[i][metric];
    }
  }
  return winner;
}