import { createStore, applyMiddleware, compose} from 'redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createLogger } from 'redux-logger';
import promiseMiddleware from '../middleware/promise-middleware';
// import { reducer as formReducer } from 'redux-form';
import rootReducer from '../reducers/index';

// create an object for the default data
const defaultState={

};

const history=createBrowserHistory();

const store=createStore(connectRouter(history)(rootReducer), // new root reducer with router state
  defaultState,
  compose(applyMiddleware(routerMiddleware(history), thunk, promiseMiddleware, createLogger()),window.devToolsExtension ? window.devToolsExtension() : f => f)

);

export default store;
export { history };
