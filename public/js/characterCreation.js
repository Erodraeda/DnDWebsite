let proficiencies = [];
var input = document.getElementById("prof-input-text");

document.getElementById("selector1").onchange = function() {

    proficiencies.push(document.getElementById("selector1").value);

    input.value = proficiencies;
};

document.getElementById("selector2").onchange = function() {

    proficiencies.push(document.getElementById("selector2").value);

    input.value = proficiencies;
};

document.getElementById("selector3").onchange = function() {

    proficiencies.push(document.getElementById("selector3").value);

    input.value = proficiencies;
};

document.getElementById("maxHP-input").onchange = function() {

    var curhp = document.getElementById("curHP-input");

    curhp.value = document.getElementById("maxHP-input").value;

}

// const character1 = new Character({
    //     charName: document.getElementById("name-input").value,
    //     class: document.getElementById("classes-option").value,
    //     level: cdocument.getElementById("level-input").value,
    //     race: document.getElementById("races-option").value,
    //     inspiration: 0,
    //     profBonus: document.getElementById("proffBonus-input").value,
    //     armorClass: document.getElementById("armorClass-input").value,
    //     speed: document.getElementById("speed-input").value,
    //     str: document.getElementById("str-input").value,
    //     dex: document.getElementById("dex-input").value,
    //     con: document.getElementById("con-input").value,
    //     wis: document.getElementById("wis-input").value,
    //     int: document.getElementById("int-input").value,
    //     cha: document.getElementById("cha-input").value,
    //     maxHP: document.getElementById("maxHP-input").value,
    //     curHP: document.getElementById("maxHP-input").value,
    //     hitDie: 1,
    //     deathSaves: 0,
    //     proficiencies: proficiencies,

    // });