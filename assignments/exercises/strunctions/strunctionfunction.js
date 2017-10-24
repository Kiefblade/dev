var mainStr = 'cats, dogs, fish, ';
var secondStr = 'tigers, lions, bears';

function animalList () {
  console.log(mainStr.concat(secondStr + " "));
}
animalList();

var isAngry = true;
var angryText = 'Im gonna smash ya';

function getYelledAt () {
  if (isAngry === true){
    console.log(angryText.toUpperCase());
  }
}
getYelledAt();

var isCalm = true;
var calmText = 'IM SORRY FOR TRYNA SMASH YA..';

function calmDown () {
  if (isCalm === true){
    console.log(calmText.toLowerCase());
  }
}
calmDown();

var hey = 'heeeeeeeeey';
