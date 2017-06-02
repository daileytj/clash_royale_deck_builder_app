import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import Card from '../components/card';
import store from '../stores/store';

export class DeckBuilder extends React.Component{
  constructor(props){
    super(props);
    this.removeCard = this.removeCard.bind(this)
  }

  removeCard(e){
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


  render(){
    // const removeCard = (e) => {
    //   let card = e.target;
    //   let _id = card.closest("div").children[0].innerHTML;
    //   let idName = card.closest("div").children[1].innerHTML;
    //   let rarity = card.closest("div").children[2].innerHTML;
    //   let type = card.closest("div").children[3].innerHTML;
    //   let name = card.closest("div").children[4].innerHTML;
    //   let description = card.closest("div").children[5].innerHTML;
    //   let arena = card.closest("div").children[6].innerHTML;
    //   let elixirCost = card.closest("div").children[7].innerHTML;
    //   let order = card.closest("div").children[8].innerHTML;
    //   let cardObject = {
    //     '_id': _id,
    //     'idName': idName,
    //     'rarity': rarity,
    //     'type': type,
    //     'name': name,
    //     'description': description,
    //     'arena': arena,
    //     'elixirCost': elixirCost,
    //     'order': order
    //   };
    //   this.props.dispatch(actions.removeCardFromCustomDeck(cardObject));
    //   console.log(idName, 'removed');
    //   console.log('card object:', cardObject);
    // }
    //
    let state = store.getState();
    // console.log('state:', state);
    // console.log('state.customDeck[0].customDeck.card1:', state.customDeck[0].customDeck.card1);

    return(
      <div className = "deck-builder-container">
        <div className = "blank card-container deck-builder-deck slot1" onClick = {this.removeCard}>
          <Card card = {state.customDeck[0].customDeck.card1}/>
        </div>
        <div className = "blank card-container deck-builder-deck slot2" onClick = {this.removeCard}>
          <Card card = {state.customDeck[0].customDeck.card2}/>
        </div>
        <div className = "blank card-container deck-builder-deck slot3" onClick = {this.removeCard}>
          <Card card = {state.customDeck[0].customDeck.card3}/>
        </div>
        <div className = "blank card-container deck-builder-deck slot4" onClick = {this.removeCard}>
          <Card card = {state.customDeck[0].customDeck.card4}/>
        </div>
        <div className = "blank card-container deck-builder-deck slot5" onClick = {this.removeCard}>
          <Card card = {state.customDeck[0].customDeck.card5}/>
        </div>
        <div className = "blank card-container deck-builder-deck slot6" onClick = {this.removeCard}>
          <Card card = {state.customDeck[0].customDeck.card6}/>
        </div>
        <div className = "blank card-container deck-builder-deck slot7" onClick = {this.removeCard}>
          <Card card = {state.customDeck[0].customDeck.card7}/>
        </div>
        <div className = "blank card-container deck-builder-deck slot8" onClick = {this.removeCard}>
          <Card card = {state.customDeck[0].customDeck.card8}/>
        </div>
      </div>
    )
  }
}

export default connect()(DeckBuilder);
