import React from 'react';
import {connect} from 'react-redux';
import Card from './card';
// import * as actionCreators from '../actions/index.js';

class AvailableCardList extends React.Component{

  render(){
    return(
      <div className = "available-card-list">
        {this.props.cards.map((card,i) => <Card {...this.props} key = {i} i = {i} card = {card}/>)}
      </div>
    )
  }
}

export default connect()(AvailableCardList);
