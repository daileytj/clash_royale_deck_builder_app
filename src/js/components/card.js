import React from 'react';
import {connect} from 'react-redux';
import blankCard from '../../images/blank-card.png';

class Card extends React.Component {
  // constructor(props){
  //   super(props);
  // }

  render(props){
    const{ card/*, image, cardName, idName, rarity, type, name, description, arena, elixirCost*/ } = this.props;

    const imageToUse = () => {
      let image = '';
      if(card.idName === "blank"){
        image =  <img className = "card-image" src = {blankCard} alt = "Blank Card"/>
      }
      else{
        image =  <img className = "card-image" src = {`http://www.clashapi.xyz/images/cards/${card.idName}.png`} alt = {card.description}/>
      }
      return image;
    }

    return(
      <div className = "card" onClick = {this.props.onClick}>
        <p className = "hidden cardName">{card.cardName}</p>
        <p className = "hidden idName">{card.idName}</p>
        <p className = "hidden rarity">{card.rarity}</p>
        <p className = "hidden type">{card.type}</p>
        <p className = "hidden name">{card.name}</p>
        <p className = "hidden description">{card.description}</p>
        <p className = "hidden arena">{card.arena}</p>
        <p className = "hidden elixirCost">{card.elixirCost}</p>
        {imageToUse()}
      </div>
    )
  }
}

export default connect()(Card);
