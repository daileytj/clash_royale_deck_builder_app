import React, {Component} from 'react';
import {connect} from 'react-redux';
import Card from '../components/card';

class Deck extends Component {

  // const deck = this.props;
  render(props){
    const {deck,title,strategy} = this.props;
    return(
      <div className = "deck">
        <h2>{title}</h2>
        {deck.map((card,i) => <Card {...this.props} key = {i} i = {i} card = {card}/>)}
        <h3>Strategy</h3>
        <p className = "deck-strategy">{strategy}</p>
      </div>
    )
  }

}

export default connect()(Deck);
