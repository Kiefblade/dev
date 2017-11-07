var chai = require('chai');
var assert = chai.assert;
var ipValidation = require('./app.js');

describe('A function to test an IP Address for validity.', function(){
  it('Should return true if the IP Address is valid.', function(){
    assert.equal(ipValidation('255.255.255.255'), true);
  })
  it('Should return false if the IP address is invalid.', function(){
    assert.equal(ipValidation('255255255255'), false);
  })
});
