import React from 'react';
import blankCard from '../../images/blank-card.png';

const Card = (props) => (
  <div className = "card" onClick = {props.onClick}>
    {
       props.card.idName === 'blank' ?
       <img className = "card-image" src = {blankCard} alt = "Blank Card"/>
       :
       <img className = "card-image" src = {`http://www.clashapi.xyz/images/cards/${props.card.idName}.png`} alt = {props.card.description}/>
     }
  </div>
)

export default Card;
