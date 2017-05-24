import React, {Component} from 'react';
import {connect} from 'react-redux';
import DeckBuilder from '../components/deck_builder';
import DeckBuildOptions from '../components/deck_build_options';
import AvailableCardList from '../components/available_card_list';

class Build extends Component{
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className = "build-page">
        <div className = "deck-builder-and-options-container">
          <DeckBuilder {...this.props} />
          <DeckBuildOptions {...this.props} />
          <AvailableCardList {...this.props} />
        </div>
      </div>
    )
  }
}

export default connect()(Build);
