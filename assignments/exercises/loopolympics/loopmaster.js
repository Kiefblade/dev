/*/step one
for (i = 0; i < 10; i++) {
  console.log([i]);
}
step two
for (i = 9; i >= 0; i--) {
  console.log([i]);
}
step three
var fruit = ['banana', 'orange', 'apple', 'kiwi', 'pear', 'peach']
/*for (i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}
step four
for (i = 0; i < fruit.length; i+=2) {
  console.log(fruit[i]);
} */
var peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Beiber",
    occupation: "Singer"
  },
  {
    name: "Vladmir Putin",
    occupation: "Politition"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]

var names = [];
var occupations = [];

/* for (i = 0; i < peopleArray.length; i++) {
  names.push(peopleArray[i].name);
}
for ( i = 0; i < peopleArray.length; i++) {
  occupations.push(peopleArray[i].occupation);
}
*/
for (var i = 0; i < peopleArray.length; i++) {
  if (i % 2 === 0){
    names.push(peopleArray[i].name);
    continue;
  }
  if (i % 2 !== 0){
    occupations.push(peopleArray[i].occupation);
  }
}
console.log(names);
console.log(occupations);
