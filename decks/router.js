const express = require('express');
const jsonParser = require('body-parser').json();


const {
    Deck
} = require('./models');

const DecksRouter = express.Router();

DecksRouter.use(jsonParser);

DecksRouter.get('/', (req, res) => {
    return Deck
        .find()
        .exec()
        .then(decks => res.json(decks.map(deck => deck.apiRepr())))
        .catch(err => console.log(err) && res.status(500).json({
            message: 'Internal server error'
        }));
});


module.exports = {
    DecksRouter
};
