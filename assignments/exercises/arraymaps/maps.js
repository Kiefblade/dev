// var numbers = [1, 3, 6, 9, 20];
//
// var newNumbers = numbers.map(function(num){
//   return num * 2;
// })
//
// console.log(newNumbers);

// var numbers = [1, 2, 6, 4, 345];
//
// var newNumbers = numbers.map(function(num){
//   return num.toString();
// })
//
// console.log(newNumbers);

var names = ([{
    name: "Angelina Jolie",
    age: 80
  },{
    name: "Eric Jones",
    age: 2
  },{
    name: "Paris Hilton",
    age: 5
  },{
    name: "Kayne West",
    age: 16
  },{
    name: "Bob Ziroll",
    age: 100
  }])

  function namesOnly (arr){
    return arr.map(function(personOnly){
      return personOnly.name;
    })
  }
  function agesOnly (arr){
    return arr.map(function(ageOnly){
      return ageOnly.age;
    })
  }
document.getElementById('nameprint').innerHTML = "<h1>" + namesOnly(names) + "</h1>";
document.getElementById('ageprint').innerHTML = "<h2>" + agesOnly(names) + "</h2>";
