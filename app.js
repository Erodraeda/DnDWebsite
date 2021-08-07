const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/account');
const Character = require('./models/character');

mongoose.connect('mongodb://localhost:27017/dbDnD', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Database connected");
})
.catch(err => {
    console.log("Failed to connect to Database");
    console.log(err);
})

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: true}));

app.use(session({secret:'account', resave: false, saveUninitialized: false}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
})

let pageName;

app.get('/register', (req, res) => {
    pageName = "Register";
    res.render('register', {pageName});
})

app.post('/register', async (req, res) => {
    pageName = "Register";
    try {
        const {username, password, email, nickname} = req.body;
        const user = new User({username, email, nickname});
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
        })
    } catch (e) {
        console.log(e);
        res.redirect("/register");
    }

    res.redirect('/home');
    
})

app.get('/login', (req, res) => {
    pageName = "Login";
    res.render('login', {pageName});
})

app.post('/login', passport.authenticate("local", {failureRedirect: "/login"}), (req,res) => {
    const redirectUrl = req.session.returnTo || "/";
    delete req.session.returnTo;
    res.redirect(redirectUrl);
})

app.get("/logout", (req, res) => {
    req.logout();
    res.redirect('/');
})

app.get('/character/:id', isLoggedIn, async (req, res) => {
    pageName = "Character";
    const {id} = req.params;
    const character = await Character.findById(id);
    res.render('character', {character, pageName});
})

// app.get('/character/:id/update', isLoggedIn, async (req, res) => {
//     pageName = "Character";
//     const {id} = req.params;
//     const character = await Character.findById(id);
//     res.render('characterUpdate', {character, pageName});
// })

app.post('/character/:id/update', isLoggedIn, async (req, res) => {
    const character = req.body;
    console.log(character);
    const charId = req.body._id;
    console.log(charId);
    await Character.findByIdAndUpdate(charId, {
        "level": character.level,
        "str": character.str,
        "dex": character.dex,
        "con": character.con,
        "wis": character.wis,
        "int": character.int,
        "cha": character.cha,
        "curHP": character.curHP,
        "maxHP": character.maxHP,
        "hitDie": character.hitDie,
        "hitDieValue": character.hitDieValue,
        "armorClass": character.armorClass,
        "speed": character.speed,
        "items": character.items,
        "spells": character.spells,
        "copperCoins": character.copperCoins,
        "silverCoins": character.silverCoins,
        "goldCoins": character.goldCoins,
        "platinumCoins": character.platinumCoins,
        "profBonus": character.profBonus
    },
        function(er, res) {
        if (er) {
            console.log(er);
        } else {
            console.log(res);
        }
    });
    const id = charId;
    res.redirect('/character/' + charId);
})

app.post('/character/:id/delete', isLoggedIn, async (req, res) => {
    const {id} = req.params;
    await Character.findByIdAndDelete(id);
    res.redirect('/home');
})

app.get('/charactercreation', isLoggedIn, async (req, res) => {
    pageName = "Character Builder";
    res.render('characterCreation', {pageName});
})

app.post('/character', isLoggedIn, async (req, res) => {
    const newCharacter = new Character(req.body);
    await newCharacter.save();
    res.redirect('/home');
})

app.get('/', (req, res) => {
    res.redirect('/home');
})

app.get('/home', async (req, res) => {
    if(!req.session.characters) req.session.characters = 0;
    pageName = "Home";
    const characters = await Character.find({});
    res.render('home', {characters, pageName});
})

app.listen(3000, () => {
    console.log("server up");
});