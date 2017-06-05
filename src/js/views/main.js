import React, { Component } from 'react';
// import {connect} from 'react-redux';
import Header from '../components/header';
import Footer from '../components/footer';
// import * as actions from '../actions/index';
// import store from '../stores/store';

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
