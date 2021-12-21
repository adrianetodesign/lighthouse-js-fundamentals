/*
 Voting Station Calculation
 Adrian To
 20/12/2021
*/

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function(arrayStations) {
  let goodStations = [];
  for (let station of arrayStations) {
    if (station[1] >= 20 && (station[2] == 'community centre' || station[2] == 'school')) {
      goodStations.push(station[0]);
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));