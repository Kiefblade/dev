var readline = require('readline-sync');

var firstInt = Number(readline.question("Lets do some maths! Please give me your first number: "));
var secondInt = Number(readline.question("Cool, what's the second? I'm getting bored: "));

var operations = ["Add", "Subtract", "Multiply", "Divide"]
var index = readline.keyInSelect(operations, "Choose the operation would you like to perform: ")

function add(){
  return firstInt + secondInt;
}
function sub(){
  return firstInt - secondInt;
}
function mult(){
  return firstInt * secondInt;
}
function div(){
  return firstInt / secondInt;
}

if (index === 0){
  console.log(add());
} else if (index === 1){
  console.log(sub());
}else if (index === 2){
  console.log(mult());
}else if (index === 3){
  console.log(div());
}
