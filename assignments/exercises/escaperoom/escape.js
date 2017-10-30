var readline = require('readline-sync');
var options = ["Put hand in the hole.", "Find the key.", "Open the door."];
var keyHeld = false;

while (playerInput != 0){
  var playerInput = readline.keyInSelect(options, 'What would you like to do?');
    if(playerInput === 1){
      keyHeld = true;
      console.log("You pick up the key.");
    }else if(playerInput === 2){
      if (keyHeld === true){
        console.log("You opened the door and escaped!");
        break;
      } else{
        console.log('The door is locked, idiot.')
      }
}else{
  console.log('You died.');
}
}
