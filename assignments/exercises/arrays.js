var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop(); // returns string without lettuc STEP 1
fruit.shift(); // returns string without banana STEP 2

var modifiedFruits = fruit.indexOf("orange");

fruit.push(modifiedFruits);

var veggieLength = vegetables.length;

vegetables.push(veggieLength);

var food = fruit.concat(vegetables);

food.splice(4, 2);

food.reverse();

var foodJoin = food.join();

console.log(foodJoin);
