// import React, {Component} from 'react';
// import {connect} from 'react-redux';
//
// class CardDetails extends Component {
//   constructor(props){
//     super(props);
//   }
//
//   render(props){
//     const{ image, cardName, idName, rarity, type, name, description, arena, elixerCost } = this.props;
//
//     return(
//       <div className = "card">
//         <p>I'm a card</p>
//         <p className = "hidden cardName">{card.cardName}</p>
//         <p className = "hidden idName">{card.idName}</p>
//         <p className = "hidden rarity">{card.rarity}</p>
//         <p className = "hidden type">{card.type}</p>
//         <p className = "hidden name">{card.name}</p>
//         <p className = "hidden description">{card.description}</p>
//         <p className = "hidden arena">{card.arena}</p>
//         <p className = "hidden elixerCost">{card.elixerCost}</p>
//         <img src = {`http://www.clashapi.xyz/images/cards/${card.idName}.png`} alt = {card.description}/>
//       </div>
//     )
//   }
//
// }
//
// export default connect()(CardDetails);
