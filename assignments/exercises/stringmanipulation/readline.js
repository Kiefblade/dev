var readline = require('readline-sync');

var uppercase = readline.question("Give me a word: ");
console.log(uppercase.toUpperCase());

var charLength = readline.question("I'll tell you how many characters you have, give me a word: ");
console.log("There are " + charLength.length + " characters " + "in your string.");

var firstString = readline.question("I'll build a sentence for you! Give me the first half: ");
var secondString = readline.question("Now the second, please: ");
console.log(firstString.concat(secondString));

var longSentence = readline.question("Give me a long sentence, over 20 characters please: ");
var stringSentence = longSentence.substring(9);
console.log(stringSentence);

var userSentence = readline.question("Where would you like to start on that string? ")
console.log(longSentence.substring(userSentence.value));
