import React from 'react';
import ReactDOM from 'react-dom';

// import registerServiceWorker from './registerServiceWorker';
import './css/index.css';
import './css/font-awesome/css/font-awesome.min.css';

// Import Components
import Home from './js/views/home';
import Build from './js/views/build';
import Decks from './js/views/decks';
import Header from './js/components/header';
import Footer from './js/components/footer';
import AvailableCardList from './js/components/available_card_list';

// Import React Router dependencies
import { BrowserRouter as Router, Route} from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './js/stores/store';

const router = (
  <Provider store = { store }>
      <Router>
        <div>
              <Header />
              <Route exact path = '/' component = {Home} />
              <Route exact path = '/build' component = {Build} />
              <Route exact path = '/decks' component = {Decks} />
              <Route exact path = '/cards' component = {AvailableCardList} />
              <Footer />
        </div>
      </Router>
</Provider>
)

ReactDOM.render(router, document.getElementById('app'));
// registerServiceWorker();
