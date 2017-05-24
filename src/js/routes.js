import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Import Components
import App from './views/app';
import Home from './views/home';
import Build from './views/build';
import Decks from './views/decks';
import CardDetails from './views/cardDetails';
import Deck from './views/deck';
import AvailableCardList from './components/available_card_list';

// Import React Router dependencies
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';


import { Provider } from 'react-redux';
import store, {createdHistory} from './stores/store';

class Routes extends Component{
  render(){
    return(
  <Provider store = { store }>
    <ConnectedRouter history = {createdHistory} >
      <div>
      <Route path = '/' component = {App}>
        <Route exact path = '/' component = {Home}></Route>
        <Route path = '/build' component = {Build} ></Route>
        <Route path = '/decks' component = {Decks} ></Route>
        <Route path = '/cards' component = {AvailableCardList} ></Route>
      </Route>
    </div>
    </ConnectedRouter>
</Provider>)
}
}

export default Routes;
