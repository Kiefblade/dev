var chai = require('chai');
var assert = chai.assert;
var newWord = require('./app.js').newWord;
var lookUp = require('./app.js').lookUp;

describe("A function creating a dictionary to add and lookup words", function(){
  it("Should store the word when added", function(){
    newWord('cake', 'a tasty pastry');
    assert.equal(lookUp('cake'), 'a tasty pastry')
  });
  it("Should return null when we lookup a word not present", function(){
      assert.isNull(lookUp('pear'));
  });
})
