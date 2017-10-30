var readline = require('readline-sync');

function Location(isShip, hit){
  this.isShip = isShip;
  this.hit = hit;
}
function boolinOut(){
  var num = Math.random() >= 0.5;
  if (num >= 0.5){
    return true;
  }else{
    return false;
  }
}
var battleGrid = [];
rows = 10;
columns = 10;

for(var i = 0; i < rows; i++){
  battleGrid.push([]);
  for(var j = 0; j < columns; j++){
    battleGrid[i].push(new Location(boolinOut(), false));
  }
}
var alphaRow = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
var numRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var hits = 0;
var misses = 0;

while(hits < 3 && misses < 20){
var alphaPick = readline.keyInSelect(alphaRow, "Please choose an alpha character.");
var numPick = readline.keyInSelect(numRow, "Now choose a number, please.");

if(battleGrid[alphaPick][numPick].isShip === true && battleGrid[alphaPick][numPick].hit === false){
  console.log('Rekt!');
  hits++;
  battleGrid[alphaPick][numPick].hit = true;
  console.log("Total Hits: " + hits);
} else if (battleGrid[alphaPick][numPick].isShip === false && battleGrid[alphaPick][numPick].hit === false){
    console.log('Whoops, try again.');
    misses++;
    battleGrid[alphaPick][numPick].hit = true;
    console.log("Total Misses: " + misses);
  }
}
if(hits === 3){
  console.log('You won!');
}
if(misses === 20){
  console.log('The enemy killed you first. >:D');
}
