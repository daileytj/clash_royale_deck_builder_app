import React, { Component } from 'react';
import {connect} from 'react-redux';
import Deck from './deck';

class Decks extends Component{
  //place after h2-> {this.props.decks.map((deck, i) => <Deck {...this.props} key = {i} i = {i} deck = {deck}/>)}
  render() {

    const testDecks = {
  "title": "Another Awesome Deck",
  "strategy": "The Ultimate Deck requires little strategy. Deploy your troops and watch the towers fall... Collect Crowns... Claim Victory!...The Ultimate Deck requires little strategy. Deploy your troops and watch the towers fall... Collect Crowns... Claim Victory!... The Ultimate Deck requires little strategy. Deploy your troops and watch the towers fall... Collect Crowns... Claim Victory!... The Ultimate Deck requires little strategy. Deploy your troops and watch the towers fall... Collect Crowns... Claim Victory! ",
  "cards": [{
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
}]
};

    return(
      <div className = "decks-page">
        <Deck className = "a-deck deck1" deck = {testDecks.cards} title = {testDecks.title} strategy = {testDecks.strategy}/>
        <Deck className = "a-deck deck2" deck = {testDecks.cards} title = {testDecks.title} strategy = {testDecks.strategy}/>
        <Deck className = "a-deck deck3" deck = {testDecks.cards} title = {testDecks.title} strategy = {testDecks.strategy}/>
        <Deck className = "a-deck deck4" deck = {testDecks.cards} title = {testDecks.title} strategy = {testDecks.strategy}/>
        <Deck className = "a-deck deck1" deck = {testDecks.cards} title = {testDecks.title} strategy = {testDecks.strategy}/>
        <Deck className = "a-deck deck2" deck = {testDecks.cards} title = {testDecks.title} strategy = {testDecks.strategy}/>
        <Deck className = "a-deck deck3" deck = {testDecks.cards} title = {testDecks.title} strategy = {testDecks.strategy}/>
        <Deck className = "a-deck deck4" deck = {testDecks.cards} title = {testDecks.title} strategy = {testDecks.strategy}/>
      </div>
    )
  }
}

export default connect()(Decks);
