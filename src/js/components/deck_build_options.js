import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import {addNewCustomDeck} from '../actions/index';
import blueKing from '../../images/blue-king.png';

export class DeckBuildOptions extends React.Component{

  submitHandler(values) {
        const title=values.title;
        const strategy=values.strategy;
        const customDeck=this.props.customDeck.cards;
        this.props.addNewCustomDeck(title, strategy, customDeck);
        values.title='';
        values.strategy='';
    }

  render(){
    return(
      <div className="deck-builder-options-wrapper">
        <img className="blue-king clearfix" src={blueKing} alt="Blue King"/>
        <div className = "deck-builder-instructions">
          <h2>Ok, I made it this far... now what?</h2>
          <p>Build your custom deck from the characters below. Simply click on a character image to add it to your deck. If you make a mistake and need to remove a character, simply click on the image of the character stored in your custom deck and it will vanish.</p>
          <p>When you have all 8 characters selected, fill out the form fields below and click "Save Deck" to store it in the "Decks" page for everyone to view.</p>
        </div>
          <form className="clearfix" onSubmit={this.props.handleSubmit(this.submitHandler.bind(this))}>
            <fieldset>
              <label className="deck-title-label" name="title">Title</label>
              <Field id="title" component="input" name="title" className="deck-title-input" type="text" placeholder="My Ultimate Deck" required/>
              <label className="deck-strategy-label" name="strategy">Strategy</label>
              <Field id="strategy" component="textarea" name="strategy" className="deck-strategy-input" type="text" placeholder="The Ultimate Deck requires little strategy. Deploy your troops and watch the towers fall... Collect Crowns... Claim Victory!" required/>
              {/*<button className="random-button">Randomize</button>*/}
              <button type="submit" className="save-deck-button">Save Deck</button>
        </fieldset>
          </form>
      </div>
    )
  }
}

const mapStateToProps=(state, props)=>({
  customDeck: state.customDeck
})

export default connect(mapStateToProps, { addNewCustomDeck })(reduxForm({
    form: 'DeckBuildOption',
})(DeckBuildOptions));
