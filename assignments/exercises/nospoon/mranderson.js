var waterBottle = {
  isPurified: true,
  color: 'clear',
  content: 16,
  distributionInfo: ['Niagara Falls', 'Bentonville', 'AR', 72716],
  drinkWater: function drink (){
    if (waterBottle.isPurified === true){
      return ('*ahhhh*');
    }
  }
}
console.log(waterBottle.drinkWater());

var iPhone = {
  makeModel: 'Apple',
  isWaterProof: false,
  cameraPixels: 13,
  features: ['Front facing camera', 'Biometric Scanner', 'Frequent Crashes'],
  waterDrop: function waterProof () {
    if (iPhone.isWaterProof == false){
      return ('What are you doing to my phone?');
    }else {
      return ('Nice try bud.')
    };
  }
}
console.log(iPhone.waterDrop());

var macBook = {
  yearMade: 2015,
  color: 'grey',
  apps: [' Bear', ' Atom', ' Brackets'],
  describeBook: function favApps () {
    return ('My macbook is from ' + macBook.yearMade + '. ' + "My favorite apps are" + macBook.apps);
  }
}
console.log(macBook.describeBook());

var backPack = {
  brand: 'Levis',
  weight: [30, 'lbs'],
  isHeavy: true,
  carryPack: function isItHeavy () {
    if (backPack.isHeavy == true){
      return 'Man, this thing must weight like ' + backPack.weight.join(" ");
    }
  }
}
console.log(backPack.carryPack());

var headPhones = {
  areTooLoud: true,
  color: 'white',
  cordLength: [24, 'inches'],
  tooLoud: function tooLoud () {
    if (headPhones.areTooLoud == true){
      return 'If u dont turn that down youre gonna get lashed with ' + headPhones.cordLength.join(" ") + ' of rope!';
    }
  }
}
console.log(headPhones.tooLoud());

var deskChair = {
  color: 'blue',
  ifRolls: true,
  heightinInches: [30, 'inches'],
  rolling: function imHigh () {
    if (deskChair.ifRolls == true){
      return 'Im high! ' + deskChair.heightinInches.join(" ") + ' to be exact.'
    }
  }
}
console.log(deskChair.rolling());

var table = {
  confusedTable: 'TabLes Are SuPeR sTrONG',
  isStrong: true,
  price: 150,
  strongTable: function strongStuff () {
    return (confusedTable.table.confusedTable.join()
  }
}

var windowPane = {

}

var desk = {

}

var projector = {

}
