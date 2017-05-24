import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import Card from '../components/card';

class DeckBuilder extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    const testDeck = [{
    "_id": "58d176a56d804500104b1248",
    "idName": "arrows",
    "rarity": "Common",
    "type": "Spell",
    "name": "Arrows",
    "description": "Arrows pepper a large area, damaging everyone hit. Reduced damage to Crown Towers.",
    "arena": 0,
    "elixirCost": 3,
    "order": 1,
    "__v": 0
    },
    {
    "_id": "58d176a56d804500104b124e",
    "idName": "bomber",
    "rarity": "Common",
    "type": "Troop",
    "name": "Bomber",
    "description": "Small, lightly protected skeleton that throws bombs. Deals area damage that can wipe out a swarm of enemies.",
    "arena": 0,
    "elixirCost": 3,
    "order": 2,
    "__v": 0
    },
    {
    "_id": "58d176a56d804500104b125b",
    "idName": "archers",
    "rarity": "Common",
    "type": "Troop",
    "name": "Archers",
    "description": "A pair of unarmored ranged attackers. They'll help you take down ground and air units, but you're on your own with hair coloring advice.",
    "arena": 0,
    "elixirCost": 3,
    "order": 3,
    "__v": 0
    },
    {
    "_id": "58d176a56d804500104b125d",
    "idName": "knight",
    "rarity": "Common",
    "type": "Troop",
    "name": "Knight",
    "description": "A tough melee fighter. The Barbarian's handsome, cultured cousin. Rumor has it that he was knighted based on the sheer awesomeness of his mustache alone.",
    "arena": 0,
    "elixirCost": 3,
    "order": 4,
    "__v": 0
    },
    {
    "_id": "58d176a56d804500104b1257",
    "idName": "fireball",
    "rarity": "Rare",
    "type": "Spell",
    "name": "Fireball",
    "description": "Annnnnd... Fireball. Incinerates a small area, dealing high damage. Reduced damage to Crown Towers.",
    "arena": 0,
    "elixirCost": 4,
    "order": 5,
    "__v": 0
    },
    {
    "_id": "58d176a56d804500104b1253",
    "idName": "mini-pekka",
    "rarity": "Rare",
    "type": "Troop",
    "name": "Mini P.E.K.K.A.",
    "description": "The Arena is a certified butterfly-free zone. No distractions for P.E.K.K.A., only destruction.",
    "arena": 0,
    "elixirCost": 4,
    "order": 6,
    "__v": 0
    },
    {
    "_id": "58d176a56d804500104b1252",
    "idName": "musketeer",
    "rarity": "Rare",
    "type": "Troop",
    "name": "Musketeer",
    "description": "Don't be fooled by her delicately coiffed hair, the Musketeer is a mean shot with her trusty boomstick.",
    "arena": 0,
    "elixirCost": 4,
    "order": 7,
    "__v": 0
    },
    {
    "_id": "58d176a56d804500104b124c",
    "idName": "giant",
    "rarity": "Rare",
    "type": "Troop",
    "name": "Giant",
    "description": "Slow but durable, only attacks buildings. A real one-man wrecking crew!",
    "arena": 0,
    "elixirCost": 5,
    "order": 8,
    "__v": 0
    }
  ]

    return(
      <div className = "deck-builder-container">
        <div className = "blank card-container deck-builder-deck slot1">
          <Card card = {testDeck[0]}/>
        </div>
        <div className = "blank card-container deck-builder-deck slot2">
          <Card card = {testDeck[1]}/>
        </div>
        <div className = "blank card-container deck-builder-deck slot3">
          <Card card = {testDeck[2]}/>
        </div>
        <div className = "blank card-container deck-builder-deck slot4">
          <Card card = {testDeck[3]}/>
        </div>
        <div className = "blank card-container deck-builder-deck slot5">
          <Card card = {testDeck[4]}/>
        </div>
        <div className = "blank card-container deck-builder-deck slot6">
          <Card card = {testDeck[5]}/>
        </div>
        <div className = "blank card-container deck-builder-deck slot7">
          <Card card = {testDeck[6]}/>
        </div>
        <div className = "blank card-container deck-builder-deck slot8">
          <Card card = {testDeck[7]}/>
        </div>
      </div>
    )
  }
}

export default connect()(DeckBuilder);
