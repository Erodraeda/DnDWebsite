const mongoose = require('mongoose');
const Character = require('./models/character');

mongoose.connect('mongodb://localhost:27017/dbDnD', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Conexão estabelecida com o banco!");
})
.catch(err => {
    console.log("Erro ao conectar com o banco...");
    console.log(err);
})

const character1 = new Character({
    charName: 'Erodraeda',
    class: 'Bard',
    level: 7,
    playerName: 'Lucas',
    race: 'Tiefling',
    inspiration: 0,
    profBonus: 2,
    armorClass: 11,
    speed: 9,
    str: 10,
    dex: 10,
    con: 12,
    wis: 15,
    int: 11,
    cha: 17,
    maxHP: 13,
    curHP: 13,
    hitDie: 3,
    deathSaves: 3,
    proficiencies: ['Dexterity', 'Charisma', 'Deception', 'Performance', 'Persuasion'],
})

const character2 = new Character({
    charName: 'Elyne',
    class: 'Rogue',
    level: 5,
    playerName: 'Lucas',
    race: 'Half-Elf',
    inspiration: 0,
    profBonus: 2,
    armorClass: 15,
    speed: 15,
    str: 12,
    dex: 18,
    con: 12,
    wis: 10,
    int: 14,
    cha: 8,
    maxHP: 42,
    curHP: 37,
    hitDie: 2,
    deathSaves: 1,
    proficiencies: ['Dexterity', 'Intelligence', 'History', 'Perception', 'Sleight of Hand', 'Stealth'],
})

Character.insertMany([character1, character2])
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })
