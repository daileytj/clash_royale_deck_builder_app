import { createStore, applyMiddleware, compose} from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers/index';

// import cards from '../data/cards';
import decks from '../data/decks';

// create an object for the default data
const defaultState = {
  // cards
  decks
};

const history = createBrowserHistory();

const store = createStore(connectRouter(history)(rootReducer), // new root reducer with router state
  defaultState,
  compose(applyMiddleware(routerMiddleware(history), thunk, createLogger()),window.devToolsExtension ? window.devToolsExtension() : f => f)

);

export default store;
export { history };
