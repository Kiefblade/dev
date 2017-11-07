var chai = require('chai');
var assert = chai.assert;
var palindrome = require('./app.js');

// describe("A function to check if two arguments add up to 4", function(){
//   it("Should return true if the arguments add up to 4", function(){
//     add(2,2);
//     assert.equal(add(2,2), true);
//   });
//   it("Should return false if the arguments don't add up to 4", function(){
//     add(4,1);
//     assert.equal(add(4,1), false);
//   })
// })

describe("A function to heck if an argument is a palindrome", function(){
  it("Should return true if the argument is a palindrome", function(){
    assert.equal(palindrome('star rats'), true);
  });
  it("Should return false if the argument is not a pilindrome", function(){
    assert.equal(palindrome('palindrome'), false);
  });
  it("Should return true if argument is a palindrome regardless of punctuation", function(){
    assert.equal(palindrome('taco! cat!'), palindrome('tacocat'));
  });
});
