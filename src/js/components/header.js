import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import * as actions from '../actions/index';
import clashRoyaleLogo from '../../images/clash-royale-logo.png';
import crown from '../../images/crown.png';
// "http://liquidcc.com/wp-content/uploads/2015/02/crown.png"
// import { store } from '../index';
// @connect( state => ({ ... }) )

class Header extends React.Component {
    // constructor(props){
    //     super(props)
    //     // this.toggleNav = this.toggleNav.bind(this);
    // }

    // toggleNav(){
    //     let nav = document.getElementsByClassName('nav-wrapper');
    //     let navElement = nav[0];
    //     console.log('nav', nav);
    //     console.log('nav[0].className', nav[0].className);
    //     if(navElement.classList.contains('hidden-for-mobile')){
    //         navElement.classList -= 'hidden-for-mobile';
    //     }
    //     else{
    //         navElement.classList += 'hidden-for-mobile';
    //     }
    //
    // }

    render() {
        // console.log(store);
      return (
          <div>
            <nav>
              <li className = "app-heading" >
                <Link to = "/" className = "nav-link">
                  <img className = "clash-logo" src = {clashRoyaleLogo} alt = "Clash Royale Logo" />
                  <h1> Deck Builder </h1>
                </Link>
              </li>
              <img className = "hamburger-icon" src = {crown}  alt = "Nav Toggle Icon"/>
              <ul className = "nav-wrapper hidden-for-mobile" >
                <li><Link to = "/build" className = "nav-link">BUILD</Link></li>
                <li><Link to = "/decks" className = "nav-link">DECKS</Link></li>
                <li><Link to = "/cards" className = "nav-link">ALL CARDS</Link></li>
              </ul>
            </nav>
          </div>
        );
    }


}

export default connect()(Header);
