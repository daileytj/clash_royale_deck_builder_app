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

  render(){
    const addCardToDeck = (e) => {
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
        this.props.addCardToCustomDeck(cardObject);
        console.log('adding', idName, 'to deck');
        console.log('card object:', cardObject);
    }

    return(
      <div className = "available-card-list">
        {this.props.cards.map((card,i) => <Card key = {i} i = {i} card = {card} onClick = {addCardToDeck}/>)}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  cards: state.getAllAvailableCards.cards
});

export default connect(mapStateToProps, {getAllAvailableCards, addCardToCustomDeck})(AvailableCardList);
