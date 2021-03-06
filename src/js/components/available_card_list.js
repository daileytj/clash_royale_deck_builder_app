import React from 'react';
import {connect} from 'react-redux';
import Card from './card';
import {getAllAvailableCards, addCardToCustomDeck} from '../actions/index.js';

class AvailableCardList extends React.Component{

  componentDidMount() {
      this.props.getAllAvailableCards();
    }

    addCardHandler(card){
      this.props.addCardToCustomDeck(card);

    }

  render(){
    return(
      <div className="available-card-list">
        <h2>Available Characters</h2>
        {this.props.cards.map((card,i) => <Card key={i} i={i} card={card} onClick={this.addCardHandler.bind(this, card)}/>)}
      </div>
    )
  }
}

const mapStateToProps=(state, props) => ({
  cards: state.getAllAvailableCards.cards
});

export default connect(mapStateToProps, {getAllAvailableCards, addCardToCustomDeck})(AvailableCardList);
