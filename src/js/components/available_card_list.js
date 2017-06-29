import React from 'react';
import {connect} from 'react-redux';
import Card from './card';
import {getAllAvailableCards, addCardToCustomDeck} from '../actions/index.js';

class AvailableCardList extends React.Component{
  // constructor(props){
  //   super(props);
  // }

  componentDidMount() {
      this.props.getAllAvailableCards();
    }

    addCardHandler(card){
      console.log("addcardhandlercard:", card);
      this.props.addCardToCustomDeck(card);

    }

  render(){
    return(
      <div className="available-card-list">
        {this.props.cards.map((card,i) => <Card key={i} i={i} card={card} onClick={this.addCardHandler.bind(this, card)}/>)}
      </div>
    )
  }
}

const mapStateToProps=(state, props) => ({
  cards: state.getAllAvailableCards.cards
});

export default connect(mapStateToProps, {getAllAvailableCards, addCardToCustomDeck})(AvailableCardList);
