try{ //Returns name is not defined.
var myName = "John Doe";
console.log(myName);
}catch(e){
  console.log(e.message);
}

function movieCheck(age) {
  if(age < 0) {
    throw "Error cannot be less than 0";
  } else if(age <= 12) {
    console.log("You can see PG movies");
  } else if(age >= 13 && age < 18) {
    console.log("You can see PG-13 movies");
  } else if(age >= 18) {
    console.log("You can see R rated movies");
  }
}
try{
movieCheck(-1);
}catch(e){
  if (e instanceof ReferenceError){
    console.log("Reference Error!");
  }else if (e instanceof TypeError){
    console.log('Type Error!');
  }else{
    console.log(e);
  }
}
