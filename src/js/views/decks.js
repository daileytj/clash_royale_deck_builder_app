import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getAllAvailableDecks} from '../actions/index.js';
import Deck from './deck';

class Decks extends Component{

  componentDidMount() {
      this.props.getAllAvailableDecks();
    }

  render() {
    console.log("this.props.decks:",this.props.decks);
    return(
      <div className="decks-page">
        {this.props.decks.map((deck,i) => <Deck className="a-deck" key={i} i={i} deck={deck.customDeck} title={deck.title} strategy={deck.strategy}/>)}
      </div>
    )
  }
}

const mapStateToProps=(state, props) => ({
  decks: state.getAllAvailableDecks.decks
});

export default connect(mapStateToProps, {getAllAvailableDecks})(Decks);
