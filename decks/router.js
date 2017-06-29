const express=require('express');
const jsonParser=require('body-parser').json();


const {
    Deck
}=require('./models');

const DecksRouter=express.Router();

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

DecksRouter.post('/', (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            message: 'No request body'
        });
    }

    if (!('title' in req.body)) {
        return res.status(422).json({
            message: 'Missing field: title'
        });
    }

    if (!('strategy' in req.body)) {
        return res.status(422).json({
            message: 'Missing field: strategy'
        });
    }

    let title=req.body.title;
    console.log(title);
    if (typeof title !== 'string') {
        return res.status(422).json({
            message: 'Incorrect field type: title'
        });
    }

    title=title.trim();

    if (title === '') {
        return res.status(422).json({
            message: 'Incorrect field length: title'
        });
    }

    return Deck
            .create({
                title: req.body.title,
                strategy: req.body.strategy,
                customDeck: req.body.cards
            })
        .then(deck => {
            return res.status(201).json(deck.apiRepr());
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'Internal server error'
            });
        });
});

module.exports={
    DecksRouter
};
