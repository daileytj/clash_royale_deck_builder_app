import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import getAllAvailableCards from './getAllAvailableCards';
import getAllAvailableDecks from './getAllAvailableDecks';
import cards from './cards';
import decks from './decks';
import sendStateToBuild from './sendStateToBuild';
import sendStateToDecks from './sendStateToDecks';
import sendStateToCards from './sendStateToCards';

const rootReducer = combineReducers({getAllAvailableCards, getAllAvailableDecks, cards, decks,
  sendStateToBuild, sendStateToDecks, sendStateToCards, routing: routerReducer});

export default rootReducer;
