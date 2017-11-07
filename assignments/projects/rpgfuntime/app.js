const ask = require('readline-sync');

console.log("You wake up from yet another late night bender amongst the seediest taverns in the kingdom. With only a few schillings to your name, a lust for power and your trusty Stabber... you set out to recoup your losses from the innocent denizens of your city.")

const name = ask.question("Choose a name for your mugger, he's probably gonna die so don't think too hard: ");

class Player{
  constructor(name, inventory){
    this.name = name;
    this.inventory = inventory;
    this.hp = 100;
  }
}

const newPlayer = new Player(name, ['Stabber']);

const enemyTable = [
  {
    name: 'Timmy',
    hp: 30,
    inventory: 'ye Olde Mixtape',
    damage(){
      return Math.floor(Math.random() * 10);
    }
  },
  {
    name: 'Innocent Plebian',
    hp: 50,
    inventory: 'Schillings',
    damage(){
      return Math.floor(Math.random() * 15);
    }
  },
  {
    name: 'Constable Tim',
    hp: 80,
    inventory: 'Horse',
    damage(){
      return Math.floor(Math.random() * 20);
    }
  }
]

  function walk(){
    while (newPlayer.hp > 0){
      const walkin = ask.question("Press 'w' to walk or type 'print' to view your loot: ");
      if (walkin === 'w'){
        if (Math.random() <= .33){
          let randomEnemy = enemyTable[Math.floor(Math.random() * enemyTable.length)];
          fight(randomEnemy);
        }
      }else if (walkin === 'print'){
        console.log(newPlayer.name  + ", " + newPlayer.hp + ", " + "Inventory: " + newPlayer.inventory);
      }
    }
  }

function fight(monster){
  console.log("You found a new victim!");
  console.log(monster.name);
  const fightOptions = ["Run them pockets", "Dodge the cops"]
  const fighting = ask.keyInSelect(fightOptions, "What would you like to do? ");
  if (fighting === 0){
    while (monster.hp > 0){
      console.log("You attacked for " + attackEnemy(monster));
      console.log(monster.hp);
      console.log("The enemy attacked you for " + enemyAttack(monster))
      console.log(newPlayer.hp);
      if (enemyTable.length === 0){
        console.log("You run the streets now.");
        break;
      }
      else if (monster.hp <= 0){
        console.log("You ran those pockets!");
        enemyDie(monster);
        enemyTable.splice(enemyTable.indexOf(monster), 1);
      }else if(newPlayer.hp <= 0){
        die();
        break;
      }
    }
  } else if (fighting === 1){
    if (run()){
      console.log("You escaped!");
    } else{
      fight(monster);
    }
  }
}

function attackEnemy(monster){
  let playerDmg = Math.floor(Math.random()*19)+1;
  monster.hp -= playerDmg;
  return playerDmg;
}

function enemyAttack(monster){
  let monsterDmg = monster.damage();
  newPlayer.hp -= monsterDmg;
  return monsterDmg;
}

function enemyDie(monster){
  newPlayer.inventory.push(monster.inventory)
  console.log("You picked up: " + monster.inventory);

}

function die(){
  console.log("Your pockets got ran.. game over.");
}

function run(){
  return Math.random() >= 0.5
}
walk();
