import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import {addNewCustomDeck} from '../actions/index';

export class DeckBuildOptions extends React.Component{

  submitHandler(values) {
        const title=values.title;
        const strategy=values.strategy;
        const customDeck=this.props.customDeck;
        this.props.addNewCustomDeck(title, strategy, customDeck);
    }

  render(){
    return(
      <div className="deck-builder-options-wrapper">
          <form onSubmit={this.props.handleSubmit(this.submitHandler.bind(this))}>
            <fieldset>
              {/*<button className="random-button">Randomize</button>*/}
              <button type="submit" className="save-deck-button">Save Deck</button>
              <label className="deck-title-label" name="title">Title</label>
              <Field id="title" component="input" name="title" className="deck-title-input" type="text" placeholder="My Ultimate Deck" required/>
              <label className="deck-strategy-label" name="strategy">Strategy</label>
              <Field id="strategy" component="textarea" name="strategy" className="deck-strategy-input" type="text" placeholder="The Ultimate Deck requires little strategy. Deploy your troops and watch the towers fall... Collect Crowns... Claim Victory!" required/>
            </fieldset>
          </form>
      </div>
    )
  }
}

const mapStateToProps=(state, props)=>{
  customDeck: state.customDeck
}

export default connect(mapStateToProps, { addNewCustomDeck })(reduxForm({
    form: 'DeckBuildOption',
})(DeckBuildOptions));
