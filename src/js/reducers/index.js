import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import getAllAvailableCards from './getAllAvailableCards';
import getAllAvailableDecks from './getAllAvailableDecks';
import cards from './cards';
import decks from './decks';
import customDeck from './customDeck';

const rootReducer=combineReducers({getAllAvailableCards, getAllAvailableDecks, cards, decks,
  customDeck, routing: routerReducer});

export default rootReducer;
