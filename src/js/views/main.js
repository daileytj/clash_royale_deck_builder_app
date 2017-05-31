import React, { Component } from 'react';
// import {connect} from 'react-redux';
import Header from '../components/header';
import Footer from '../components/footer';
// import Home from '../views/home';
// import Build from '../views/build';
// import Decks from '../views/decks';
// import AvailableCardList from '../components/available_card_list';
// import { store } from '../../index';

class Main extends Component{
  // constructor(props){
  //   super(props);
  // }

  render() {
    return(
      <div className = "main">
        <Header/>
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default Main;
