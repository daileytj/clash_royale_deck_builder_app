// import { createStore, compose, applyMiddleware } from 'redux';
// import { syncHistoryWithStore } from 'react-router-redux';
// // import { BrowserRouter } from 'react-router-dom';
// import thunk from 'redux-thunk';
//
// // Import the root reducer
// import rootReducer from '../reducers/index';
//
// import cards from '../data/cards';
// import decks from '../data/decks';
//
// // create an object for the default data
// const defaultState = {
//   cards,
//   decks
// };
//
// const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));
//
// // export const history = syncHistoryWithStore(store);
//
// export default store;

import { createStore, applyMiddleware, compose} from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router'

import rootReducer from '../reducers/index';

import cards from '../data/cards';
import decks from '../data/decks';

// create an object for the default data
const defaultState = {
  cards,
  decks
};

const history = createBrowserHistory();
// const middleware = routerMiddleware(history);

// const store = createStore(rootReducer, defaultState, applyMiddleware(middleware));

const store = createStore(
  connectRouter(history)(rootReducer), // new root reducer with router state
  defaultState,
  compose(applyMiddleware(routerMiddleware(history), thunk))
);

export default store;
export { history };


// original store.js file
//
// import { createStore, compose, applyMiddleware } from 'redux';
// import { syncHistoryWithStore } from 'react-router-redux';
// import { hashHistory } from 'react-router';
// import thunk from 'redux-thunk';
//
// // Import the root reducer
// import rootReducer from '../reducers/index';
//
// import cards from '../data/cards';
// import decks from '../data/decks';
//
// // create an object for the default data
// const defaultState = {
//   cards,
//   decks
// };
//
// const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));
//
// export const history = syncHistoryWithStore(hashHistory, store);
//
// export default store;
