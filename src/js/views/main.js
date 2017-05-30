import React, { Component } from 'react';
// import {connect} from 'react-redux';
import Header from '../components/header';
import Footer from '../components/footer';
import Home from '../views/home';
import Build from '../views/build';
import Decks from '../views/decks';
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
        {/*React.cloneElement(<Home />, this.props)*/}
        {/*React.cloneElement(<Build />, this.props)*/}
        {/*React.cloneElement(<Decks />, this.props)*/}
        <Footer />
      </div>
    )
  }
}

export default Main;
