// Problem One

if (5 > 3) {
  console.log('is greater than');
}
//Problem Two
if ('cat'.length == 3) {
  console.log('is the length');
}
//Problem Three
if ('cat' === 'dog') {
  console.log('same thing');
}else {
  console.log('not the same');
}
//Bronse Problem
var person = {
  name: "Luke",
  age: "25"
}
if (person.age >= 18) {
  console.log(person.name + ' is allowed to go to the movie.');
}else {
  console.log(person.name + ' is not allowed to go to the movies');
}
//Bronse Problem Step Two
if (person.name[0] == "B") {
  console.log('You can attend');
}else {
  console.log('Leave.');
}
//Bronse Problem Step Three
if (person.name[0] && person.age >= 18) {
  console.log('You may attend');
}
//Silver Problem Step One
if (1 === "1") {
  console.log('strict');
}else if (1 == "1"){
  console.log('loose');
}else{
  console.log('Not Equal at all');
}
//Silver Problem Step Two
if (1 <= 2 || 2 == 4) {
  console.log('Yes');
}
//Gold Problem
if (typeof('dog') === 'string') {
  console.log(true);
}
if (typeof('true') === 'boolean') {
  console.log(true);
}
