function sumNum(num1, num2) {
    return num1 + num2;
}
    console.log(sumNum(2, 3));

var largestNum = function(num1, num2, num3) {
    if (num1 > num2 && num1 > num3){
      return (num1)
    }
      if (num2 > num1 && num2 > num3){
        return (num2);
      }
        else{
          return(num3);
        }
}
console.log(largestNum(1, 2, 3));

function evenOdd(num1) {
    if (num1 % 2 == 0){
      return "Even";
    } else {
      return "Odd";
    }
}
console.log(evenOdd(32));


var stringSize = function(str) {
    if (str.length <= 20) {
      return str.concat(str);
    }
}
console.log(stringSize("What up pal"));
