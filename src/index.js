import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import './css/index.css';
import './css/font-awesome/css/font-awesome.min.css';

// Import Components
import App from './js/views/app';
import Home from './js/views/home';
import Build from './js/views/build';
import Decks from './js/views/decks';
import CardDetails from './js/views/cardDetails';
import Deck from './js/views/deck';
import AvailableCardList from './js/components/available_card_list';

// Import React Router dependencies
// import { BrowserRouter as Router, Route} from 'react-router-dom';
// import { ConnectedRouter } from 'react-router-redux';
// import { BrowserHistory } from 'react-router-redux';

import { Provider } from 'react-redux';
import store, { history } from './js/stores/store';

import { Route, Switch } from 'react-router' // react-router v4
import { ConnectedRouter } from 'connected-react-router'

const router = (
  <Provider store = { store }>
    <ConnectedRouter history = { history } >
      <div>
        <Switch>
          <Route path = '/' component = {App}>
            <Route exact path = '/' component = {Home} />
            <Route path = '/build' component = {Build} />
            <Route path = '/decks' component = {Decks} />
            <Route path = '/cards' component = {AvailableCardList} />
          </Route>
      </Switch>
    </div>
  </ConnectedRouter>
</Provider>
)

ReactDOM.render(router, document.getElementById('app'));

//browserrouter attempt at routing... and fail!
// const router = (
//   <Provider store = {store}>
//     <BrowserRouter>
//       <Route path = '/' component = {App}>
//         <Route exact path = '/' component = {Home}></Route>
//         <Route path = '/build' component = {Build} ></Route>
//         <Route path = '/decks' component = {Decks} ></Route>
//         <Route path = '/cards' component = {AvailableCardList} ></Route>
//         <Route path = '/card/:cardId' component = {CardDetails} ></Route>
//         <Route path = '/deck/:deckId' component = {Deck} ></Route>
//       </Route>
//     </BrowserRouter>
// </Provider>
// )

// <Route path = '/card/:cardId' component = {CardDetails} ></Route>
// <Route path = '/deck/:deckId' component = {Deck} ></Route>
