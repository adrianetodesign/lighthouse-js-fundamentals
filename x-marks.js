/* 
X Marks the Perfect Spot
Adrian To
20/12/2021
*/

const paradeMoves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function(moves) {
  let position = [0,0];
  for (let movement of moves) {
    switch(movement) {
      case 'north': position[1] += 1;
        break;
      case 'south': position[1] -= 1;
        break;
      case 'east': position[0] += 1;
        break;
      case 'west': position[0] -= 1;
        break;
    }
  }
  return position;
}

console.log(paradeMoves);
console.log(finalPosition(paradeMoves));