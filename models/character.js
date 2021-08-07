const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    charName:{
        type: String,
        required: true
    },
    class:{
        type: String,
        required: true
    },
    level:{
        type: Number,
        required: true,
        min: 1,
        max: 20,
    },
    playerName:{
        type: String,
        required: true,
    },
    race:{
        type: String,
        required: true
    },
    inspiration:{
        type: Number,
        min: 0,
    },
    profBonus:{
        type: Number,
        required: true,
        min: 0,
        max: 10,
    },
    armorClass:{
        type: Number,
        required: true,
        min: 0,
    },
    speed:{
        type: Number,
        required: true,
        min: 0,
    },
    str:{
        type: Number,
        required: true,
        min: 0,
    },
    dex:{
        type: Number,
        required: true,
        min: 0,
    },
    con:{
        type: Number,
        required: true,
        min: 0,
    },
    wis:{
        type: Number,
        required: true,
        min: 0,
    },
    int:{
        type: Number,
        required: true,
        min: 0,
    },
    cha:{
        type: Number,
        required: true,
        min: 0,
    },
    maxHP:{
        type: Number,
        required: true,
        min: 0,
    },
    curHP:{
        type: Number,
        required: true,
        min: 0,
    },
    hitDie:{
        type: Number,
        required: true,
        default: 0,
        min: 0,
        max: 3,
    },
    proficiencies:{
        type: [String],
        required: true
    },
    copperCoins:{
        type: Number,
        min: 0,
        default: 0,
        required: true
    },
    silverCoins:{
        type: Number,
        min: 0,
        default: 0,
        required: true
    },
    goldCoins:{
        type: Number,
        min: 0,
        default: 0,
        required: true
    },
    platinumCoins:{
        type: Number,
        min: 0,
        default: 0,
        required: true
    },
    items:{
        type: String,
    },
    spells:{
        type: String,
    },
})

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;