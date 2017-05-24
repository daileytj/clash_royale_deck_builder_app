import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions/index';
// import clashRoyaleLogo from '../../images/clash-royale-logo.png';
// <img src = {clashRoyaleLogo} alt = "Clash Royale Logo" />

class Header extends React.Component {
    constructor(props){
      super(props);
      this.sendStateToBuild = this.sendStateToBuild.bind(this);
      this.sendStateToDecks = this.sendStateToDecks.bind(this);
      this.sendStateToCards = this.sendStateToCards.bind(this);
    }

    sendStateToBuild(){
        this.props.dispatch(actions.sendStateToBuild());
    }

    sendStateToDecks(){
        this.props.dispatch(actions.sendStateToDecks());
    }

    sendStateToCards(){
        this.props.dispatch(actions.sendStateToCards());
    }


    render() {
      return (
          <nav>
            <li className = "app-heading" ><Link to = "/" className = "nav-link">
              <img className = "clash-logo" src = "https://vignette2.wikia.nocookie.net/clashroyale/images/6/6c/Clash_Royale_Logo.png/revision/latest?cb=20160104193540" alt = "Clash Royale Logo" />
              <h1> Deck Builder </h1>
            </Link></li>
        <img className = "hamburger-icon" src = "http://liquidcc.com/wp-content/uploads/2015/02/crown.png" alt = "Nav Toggle Icon"/>
            <ul className = "nav-wrapper" >
              <li><Link onClick = {this.sendStateToBuild} to = "/build" className = "nav-link">BUILD</Link></li>
              <li><Link onClick = {this.sendStateToDecks} to = "/decks" className = "nav-link">DECKS</Link></li>
              <li><Link onClick = {this.sendStateToCards} to = "/cards" className = "nav-link">ALL CARDS</Link></li>
            </ul>
          </nav>
        );
    }
}

export default connect()(Header);
