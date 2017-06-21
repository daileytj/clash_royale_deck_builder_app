import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import clashRoyaleLogo from '../../images/clash-royale-logo.png';
import crown from '../../images/crown.png';
// "http://liquidcc.com/wp-content/uploads/2015/02/crown.png"
import { slide as Menu } from 'react-burger-menu';

export class Header extends React.Component {

    showSettings(event){
      event.preventDefault();
    }

    render() {
      return (
          <div>
            <nav>
              <li className = "app-heading" >
                <Link to = "/" className = "nav-link">
                  <img className = "clash-logo" src = {clashRoyaleLogo} alt = "Clash Royale Logo" />
                  <h1> Deck Builder </h1>
                </Link>
              </li>
              <ul className = "nav-wrapper hidden-for-mobile" >
                <li><Link to = "/build" className = "nav-link">BUILD</Link></li>
                <li><Link to = "/decks" className = "nav-link">DECKS</Link></li>
                <li><Link to = "/cards" className = "nav-link">ALL CARDS</Link></li>
              </ul>
              <ul className = "nav-wrapper hidden-for-web" >
                <img onClick = {this.showSettings} className = "hamburger-icon" src = {crown}  alt = "Nav Toggle Icon"/>
                <Menu right width={'100%'}>
                <li><Link to = "/build" className = "nav-link menu-item">BUILD</Link></li>
                <li><Link to = "/decks" className = "nav-link menu-item">DECKS</Link></li>
                <li><Link to = "/cards" className = "nav-link menu-item">ALL CARDS</Link></li>
                </Menu>
              </ul>
            </nav>
          </div>
        );
    }


}

export default connect()(Header);
