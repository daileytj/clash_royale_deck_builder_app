import React from 'react';
import {connect} from 'react-redux';

class Card extends React.Component {
  // constructor(props){
  //   super(props);
  // }

  render(props){
    const{ card/*, image, cardName, idName, rarity, type, name, description, arena, elixirCost*/ } = this.props;

    return(
      <div className = "card">
        <p className = "hidden cardName">{card.cardName}</p>
        <p className = "hidden idName">{card.idName}</p>
        <p className = "hidden rarity">{card.rarity}</p>
        <p className = "hidden type">{card.type}</p>
        <p className = "hidden name">{card.name}</p>
        <p className = "hidden description">{card.description}</p>
        <p className = "hidden arena">{card.arena}</p>
        <p className = "hidden elixirCost">{card.elixirCost}</p>
        <img className = "card-image" src = {`http://www.clashapi.xyz/images/cards/${card.idName}.png`} alt = {card.description}/>
      </div>
    )
  }
}

export default connect()(Card);
