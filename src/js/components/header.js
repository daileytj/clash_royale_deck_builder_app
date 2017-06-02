import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import * as actions from '../actions/index';
import clashRoyaleLogo from '../../images/clash-royale-logo.png';
import crown from '../../images/crown.png';
// "http://liquidcc.com/wp-content/uploads/2015/02/crown.png"
// import { store } from '../index';
// @connect( state => ({ ... }) )
import { slide as Menu } from 'react-burger-menu';

export class Header extends React.Component {
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
    showSettings(event){
      event.preventDefault();
    }

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
              <Menu right>
              <img onClick = {this.showSettings} className = "hamburger-icon" src = {crown}  alt = "Nav Toggle Icon"/>
              <ul className = "nav-wrapper hidden-for-mobile" >
                <li><Link to = "/build" className = "nav-link menu-item">BUILD</Link></li>
                <li><Link to = "/decks" className = "nav-link menu-item">DECKS</Link></li>
                <li><Link to = "/cards" className = "nav-link menu-item">ALL CARDS</Link></li>
              </ul>
            </Menu>
            </nav>
          </div>
        );
    }


}

export default connect()(Header);
