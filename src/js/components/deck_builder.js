import React from 'react';
import {connect} from 'react-redux';
import {removeCardFromCustomDeck} from '../actions/index';
import Card from '../components/card';

export class DeckBuilder extends React.Component{
  // constructor(props){
  //   super(props);
  // }

  deleteCardHandler(cardIndex){
    this.props.removeCardFromCustomDeck(cardIndex);
  }



  render(){
    let numOfBlankCards = 8-this.props.cards.length;
    let blankCardsArray = [];
    console.log("blankcardsarray",blankCardsArray);
    while(numOfBlankCards > 0){
      blankCardsArray.push({
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
          })
      numOfBlankCards -= 1;
    };
    // console.log("blankcardsarrayafterpush",blankCardsArray);
    return(
      <div className = "deck-builder-container">
        {this.props.cards.map((item, index) => (
          <div className="card-container deck-builder-deck">
              <Card card={item} key={`deck-card-${index}`} onClick = {this.deleteCardHandler.bind(this, index)} />
          </div>
        ))}
        {
          blankCardsArray.map((item, index) => (
            <div className="blank card-container deck-builder-deck">
                <Card card={item} key={`deck-card-${index}`} />
            </div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  cards: state.customDeck.cards
});

export default connect(mapStateToProps, {removeCardFromCustomDeck})(DeckBuilder);
