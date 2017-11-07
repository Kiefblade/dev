var ipValidation = function(str){
  var ipCheck = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    if (str.match(ipCheck)){
      return true;
    } else {
        return false;
    }
}
console.log(ipValidation('255.255.255.255'));

module.exports = ipValidation;
