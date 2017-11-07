var dictionary = {};

var newWord = function(word, definition){
    dictionary = {
    [word]: definition
  }
}
newWord('cake', 'a tasty pastry')

var lookUp = function (word){
    if(dictionary[word] === undefined){
      return null;
    }
      return dictionary[word];
  }
module.exports = {
  newWord,
  lookUp
}
