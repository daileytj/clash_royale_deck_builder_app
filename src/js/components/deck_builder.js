import React from 'react';
import {connect} from 'react-redux';
import {removeCardFromCustomDeck} from '../actions/index';
import Card from '../components/card';

export class DeckBuilder extends React.Component{
  constructor(props){
    super(props);
    this.removeCard = this.removeCard.bind(this)
  }

  removeCard(e){
    let card = e.target.ref;
    let cardObject = {
      '_id': card._id,
      'idName': card.idName,
      'rarity': card.rarity,
      'type': card.type,
      'name': card.name,
      'description': card.description,
      'arena': card.arena,
      'elixirCost': card.elixirCost,
      'order': card.order
    };
    this.props.removeCardFromCustomDeck(cardObject);
    console.log(card.idName, 'removed');
    console.log('card object:', cardObject);

  }


  render(){

    return(
      <div className = "deck-builder-container">
        <div className = "blank card-container deck-builder-deck slot1" onClick = {this.removeCard}>
          <Card card = {this.props.customDeck.card1}/>
        </div>
        <div className = "blank card-container deck-builder-deck slot2" onClick = {this.removeCard}>
          <Card card = {this.props.customDeck.card2}/>
        </div>
        <div className = "blank card-container deck-builder-deck slot3" onClick = {this.removeCard}>
          <Card card = {this.props.customDeck.card3}/>
        </div>
        <div className = "blank card-container deck-builder-deck slot4" onClick = {this.removeCard}>
          <Card card = {this.props.customDeck.card4}/>
        </div>
        <div className = "blank card-container deck-builder-deck slot5" onClick = {this.removeCard}>
          <Card card = {this.props.customDeck.card5}/>
        </div>
        <div className = "blank card-container deck-builder-deck slot6" onClick = {this.removeCard}>
          <Card card = {this.props.customDeck.card6}/>
        </div>
        <div className = "blank card-container deck-builder-deck slot7" onClick = {this.removeCard}>
          <Card card = {this.props.customDeck.card7}/>
        </div>
        <div className = "blank card-container deck-builder-deck slot8" onClick = {this.removeCard}>
          <Card card = {this.props.customDeck.card8}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  customDeck: state.customDeck[0].customDeck
});

export default connect(mapStateToProps, {removeCardFromCustomDeck})(DeckBuilder);
