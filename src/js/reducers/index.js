import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import getAllAvailableCards from './getAllAvailableCards';
import getAllAvailableDecks from './getAllAvailableDecks';
import cards from './cards';
import decks from './decks';
import customDeck from './customDeck';

const rootReducer=combineReducers({getAllAvailableCards, getAllAvailableDecks, cards, decks,
  customDeck, form: formReducer, routing: routerReducer});

export default rootReducer;
