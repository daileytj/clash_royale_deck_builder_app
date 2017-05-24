import React, { Component } from 'react';
// import {connect} from 'react-redux';
import Header from '../components/header';
import Footer from '../components/footer';
// import Build from './build';
// import Decks from './decks';
// import AvailableCardList from '../components/available_card_list';

class Main extends Component{
  // constructor(props){
  //   super(props);
  // }

  render() {
    return(
      <div className = "main">
        <Header {...this.props} />
        {React.cloneElement(...this.props.children, ...this.props)}
        <Footer />
      </div>
    )
  }
}

export default Main;
