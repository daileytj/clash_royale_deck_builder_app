import React from 'react';
import {connect} from 'react-redux';
// import * as actions from '../actions/index';

class DeckBuildOptions extends React.Component{
  // constructor(props){
  //   super(props);
  // }

  render(){
    return(
      <div className = "deck-builder-options-wrapper">
        <button className = "random-button">Randomize</button>
        <button className = "save-deck-button">Save Deck</button>
          <form>
            <fieldset>
              <label className = "deck-title-label" name = "title">Title</label>
              <input className = "deck-title-input" type = "text" placeholder = "My Ultimate Deck" required/>
              <label className = "deck-strategy-label" name = "strategy">Strategy</label>
              <textarea className = "deck-strategy-input" type = "text" placeholder = "The Ultimate Deck requires little strategy. Deploy your troops and watch the towers fall... Collect Crowns... Claim Victory!" required/>
            </fieldset>
          </form>
      </div>
    )
  }
}

export default connect()(DeckBuildOptions);
