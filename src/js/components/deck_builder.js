import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import Card from '../components/card';

class DeckBuilder extends React.Component{
  // constructor(props){
  //   super(props);
  // }

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
  },
  {
    "_id": "blank",
    "idName": "blank",
    "rarity": "",
    "type": "",
    "name": "Blank",
    "description": "An Empty Space",
    "arena": 0,
    "elixirCost": 0,
    "order": 0,
    "__v": 0,
    "image": 'blank'
  }
  ]
    const removeCard = (e) => {
      let card = e.target;
      let _id = card.closest("div").children[0].innerHTML;
      let idName = card.closest("div").children[1].innerHTML;
      let rarity = card.closest("div").children[2].innerHTML;
      let type = card.closest("div").children[3].innerHTML;
      let name = card.closest("div").children[4].innerHTML;
      let description = card.closest("div").children[5].innerHTML;
      let arena = card.closest("div").children[6].innerHTML;
      let elixirCost = card.closest("div").children[7].innerHTML;
      let order = card.closest("div").children[8].innerHTML;
      let cardObject = {
        '_id': _id,
        'idName': idName,
        'rarity': rarity,
        'type': type,
        'name': name,
        'description': description,
        'arena': arena,
        'elixirCost': elixirCost,
        'order': order
      };
      this.props.dispatch(actions.removeCardFromCustomDeck(cardObject));
      console.log(idName, 'removed');
      console.log('card object:', cardObject);
    }

    return(
      <div className = "deck-builder-container">
        <div className = "blank card-container deck-builder-deck slot1" onClick = {removeCard}>
          <Card card = {testDeck[8]}/>
        </div>
        <div className = "blank card-container deck-builder-deck slot2" onClick = {removeCard}>
          <Card card = {testDeck[8]}/>
        </div>
        <div className = "blank card-container deck-builder-deck slot3" onClick = {removeCard}>
          <Card card = {testDeck[8]}/>
        </div>
        <div className = "blank card-container deck-builder-deck slot4" onClick = {removeCard}>
          <Card card = {testDeck[8]}/>
        </div>
        <div className = "blank card-container deck-builder-deck slot5" onClick = {removeCard}>
          <Card card = {testDeck[8]}/>
        </div>
        <div className = "blank card-container deck-builder-deck slot6" onClick = {removeCard}>
          <Card card = {testDeck[8]}/>
        </div>
        <div className = "blank card-container deck-builder-deck slot7" onClick = {removeCard}>
          <Card card = {testDeck[8]}/>
        </div>
        <div className = "blank card-container deck-builder-deck slot8" onClick = {removeCard}>
          <Card card = {testDeck[8]}/>
        </div>
      </div>
    )
  }
}

export default connect()(DeckBuilder);
