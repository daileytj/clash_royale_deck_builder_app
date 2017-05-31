// import React from 'react';
// import ReactDOM from 'react-dom';
//
// // import registerServiceWorker from './registerServiceWorker';
// import './css/index.css';
// import './css/font-awesome/css/font-awesome.min.css';
//
// // Import Components
// import App from './js/views/app';
// import Home from './js/views/home';
// import Build from './js/views/build';
// import Decks from './js/views/decks';
// // import CardDetails from './js/views/cardDetails';
// // import Deck from './js/views/deck';
// import AvailableCardList from './js/components/available_card_list';
//
// // Import React Router dependencies
// import { BrowserRouter as Router, Route} from 'react-router-dom';
// // import { ConnectedRouter } from 'react-router-redux';
// // import { BrowserHistory } from 'react-router-redux';
//
// import { Provider } from 'react-redux';
// import store, { history } from './js/stores/store';
//
// // import { Route, Switch } from 'react-router' // react-router v4
// import { ConnectedRouter } from 'connected-react-router';
//
// const router = (
//   <Provider store = { store }>
//     <ConnectedRouter history = { history } >
//       <Router>
//           <App>
//               <Route exact path = '/' component = {Home} />
//               <Route path = '/build' component = {Build} />
//               <Route path = '/decks' component = {Decks} />
//               <Route path = '/cards' component = {AvailableCardList} />
//           </App>
//       </Router>
//   </ConnectedRouter>
// </Provider>
// )
//
// ReactDOM.render(router, document.getElementById('app'));

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('./css/index.css');

require('./css/font-awesome/css/font-awesome.min.css');

var _app = require('./js/views/app');

var _app2 = _interopRequireDefault(_app);

var _home = require('./js/views/home');

var _home2 = _interopRequireDefault(_home);

var _build = require('./js/views/build');

var _build2 = _interopRequireDefault(_build);

var _decks = require('./js/views/decks');

var _decks2 = _interopRequireDefault(_decks);

var _available_card_list = require('./js/components/available_card_list');

var _available_card_list2 = _interopRequireDefault(_available_card_list);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _store = require('./js/stores/store');

var _store2 = _interopRequireDefault(_store);

var _connectedReactRouter = require('connected-react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import React Router dependencies
var router = _react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(
        _connectedReactRouter.ConnectedRouter,
        { history: _store.history },
        _react2.default.createElement(
            _reactRouterDom.BrowserRouter,
            null,
            _react2.default.createElement(
                _app2.default,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _home2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/build', component: _build2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/decks', component: _decks2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/cards', component: _available_card_list2.default })
            )
        )
    )
);

// import { Route, Switch } from 'react-router' // react-router v4

// import { ConnectedRouter } from 'react-router-redux';
// import { BrowserHistory } from 'react-router-redux';

// import CardDetails from './js/views/cardDetails';
// import Deck from './js/views/deck';


// Import Components


// import registerServiceWorker from './registerServiceWorker';


_reactDom2.default.render(router, document.getElementById('app'));
