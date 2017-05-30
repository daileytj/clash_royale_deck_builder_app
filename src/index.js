import React from 'react';
import ReactDOM from 'react-dom';

// import registerServiceWorker from './registerServiceWorker';
import './css/index.css';
import './css/font-awesome/css/font-awesome.min.css';

// Import Components
import App from './js/views/app';
import Home from './js/views/home';
import Build from './js/views/build';
import Decks from './js/views/decks';
// import CardDetails from './js/views/cardDetails';
// import Deck from './js/views/deck';
import AvailableCardList from './js/components/available_card_list';

// Import React Router dependencies
import { BrowserRouter as Router, Route/*, Link*/, Switch} from 'react-router-dom';
// import { ConnectedRouter } from 'react-router-redux';
// import { BrowserHistory } from 'react-router-redux';

import { Provider } from 'react-redux';
import store, { history } from './js/stores/store';

// import { Route, Switch } from 'react-router' // react-router v4
import { ConnectedRouter } from 'connected-react-router'

const router = (
  <Provider store = { store }>
    <ConnectedRouter history = { history } >
      <Router>
        <div>
          <App>
            {/*<Link to = '/'>Home</Link>
            <Link to = '/build' className = 'nav-link'>Build</Link>
            <Link to = '/decks' className = 'nav-link'>Decks</Link>
            <Link to = '/cards' className = 'nav-link'>Cards</Link>*/}
            <Switch>
            <Route exact path = '/' component = {Home} />
            <Route path = '/build' component = {Build} />
            <Route path = '/decks' component = {Decks} />
            <Route path = '/cards' component = {AvailableCardList} />
            </Switch>
          </App>
        </div>
      </Router>
  </ConnectedRouter>
</Provider>
)

ReactDOM.render(router, document.getElementById('app'));
