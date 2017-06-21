import React, { Component } from 'react';
import {connect} from 'react-redux';
import Header from '../components/header';
import Footer from '../components/footer';
// import * as actions from '../actions/index';

class Main extends Component{
  // constructor(props){
  //   super(props);
  // }

  // componentDidMount() {
  //     store.dispatch(actions.getAllAvailableCards());
  //   }

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

// const mapStateToProps = (state, props) => ({
//   cards: state.cards
// });

export default connect()(Main);
