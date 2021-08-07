var button = document.getElementById('roll-button');
var button4 = document.getElementById('roll-button4');
var button6 = document.getElementById('roll-button6');
var button8 = document.getElementById('roll-button8');
var button10 = document.getElementById('roll-button10');
var button12 = document.getElementById('roll-button12');
var button20 = document.getElementById('roll-button20');
var button100 = document.getElementById('roll-button100');
  
button.onclick = function rollDice(){
    var dice = document.getElementById("custom-value").value;
    var result = Math.floor(Math.random() * dice) + 1;
    var diceRoll = document.getElementById('diceplaceholdercustom');
    diceRoll.innerHTML = result;
}

button4.onclick = function rollDice(){
    var result = Math.floor(Math.random() * 4) + 1;
    var diceRoll = document.getElementById('diceplaceholder4');
    diceRoll.innerHTML = result;
}

button6.onclick = function rollDice(){
    var result = Math.floor(Math.random() * 6) + 1;
    var diceRoll = document.getElementById('diceplaceholder6');
    diceRoll.innerHTML = result;
}

button8.onclick = function rollDice(){
    var result = Math.floor(Math.random() * 8) + 1;
    var diceRoll = document.getElementById('diceplaceholder8');
    diceRoll.innerHTML = result;
}

button10.onclick = function rollDice(){
    var result = Math.floor(Math.random() * 10) + 1;
    var diceRoll = document.getElementById('diceplaceholder10');
    diceRoll.innerHTML = result;
}

button12.onclick = function rollDice(){
    var result = Math.floor(Math.random() * 12) + 1;
    var diceRoll = document.getElementById('diceplaceholder12');
    diceRoll.innerHTML = result;
}

button20.onclick = function rollDice(){
    var result = Math.floor(Math.random() * 20) + 1;
    var diceRoll = document.getElementById('diceplaceholder20');
    diceRoll.innerHTML = result;
}

button100.onclick = function rollDice(){
    var result = Math.floor(Math.random() * 100) + 1;
    var diceRoll = document.getElementById('diceplaceholder100');
    diceRoll.innerHTML = result;
}

const damage = document.getElementById("damage-button");

damage.onclick = function applyDamage(){
    var damageValue = document.getElementById("damageTaken").value;
    var hp = document.getElementById("currenthealth").value;
    var newHp = Number(hp) + Number(damageValue);
    document.getElementById("currenthealth").value = newHp;
}