import React from 'react';
import {connect} from 'react-redux';
import {removeCardFromCustomDeck} from '../actions/index';
import Card from '../components/card';

export class DeckBuilder extends React.Component{

  deleteCardHandler(cardIndex){
    this.props.removeCardFromCustomDeck(cardIndex);
  }

  render(){
    let numOfBlankCards=8-this.props.cards.length;
    let blankCardsArray=[];
    while(numOfBlankCards > 0){
      blankCardsArray.push({
            idName: 'blank'
          })
      numOfBlankCards -= 1;
    };
    return(
      <div className="deck-builder-container">
        <h2 className="customDeckHeader">My Custom Deck</h2>
        {this.props.cards.map((item, index) => (
          <div className="card-container deck-builder-deck">
              <Card card={item} key={`deck-card-${index}`} onClick={this.deleteCardHandler.bind(this, index)} />
          </div>
        ))}
        {
          blankCardsArray.map((item, index) => (
            <div className="blank card-container deck-builder-deck" key={`blank-${index}`}>
                <Card card={item} />
            </div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps=(state, props) => ({
  cards: state.customDeck.cards
});

export default connect(mapStateToProps, {removeCardFromCustomDeck})(DeckBuilder);
