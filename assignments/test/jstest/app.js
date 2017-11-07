// var add = function (a, b){
//     return a + b === 4;
// }
//
// module.exports = add;

var palindrome = function(str){
    var remove = /[\W_]/g;
    var userStr = str.replace(remove, '').toLowerCase();
    var reverseStr = userStr.split('').reverse().join('');
    if (reverseStr === userStr){
      return true;
    } else{
      return false;
    }
}
console.log(palindrome('Taco Cat!'));

module.exports = palindrome;
