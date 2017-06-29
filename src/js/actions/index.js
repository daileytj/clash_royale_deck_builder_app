import 'isomorphic-fetch';

const GET_ALL_AVAILABLE_CARDS_TRIGGERED='GET_ALL_AVAILABLE_CARDS_TRIGGERED';
const GET_ALL_AVAILABLE_CARDS_SUCCESS='GET_ALL_AVAILABLE_CARDS_SUCCESS';
const GET_ALL_AVAILABLE_CARDS_FAILURE='GET_ALL_AVAILABLE_CARDS_FAILURE';

export const getAllAvailableCards=() => {
  const promise=fetch('http://www.clashapi.xyz/api/cards');
  return{
        onRequest: GET_ALL_AVAILABLE_CARDS_TRIGGERED,
        onSuccess: GET_ALL_AVAILABLE_CARDS_SUCCESS,
        onFailure: GET_ALL_AVAILABLE_CARDS_FAILURE,
        promise,
  };
}

export const addCardToCustomDeck=card => {
  return {
    type: 'ADD_CARD_TO_CUSTOM_DECK',
    card
  }
}

export const removeCardFromCustomDeck=cardIndex => {
  return {
    type: 'REMOVE_CARD_FROM_CUSTOM_DECK',
    cardIndex
  }
}

export const displayCustomDeck=() => {
  return {
    type: 'DISPLAY_CUSTOM_DECK'
  }
}

export const getAllAvailableDecks=decks => {
  return {
    type: 'GET_ALL_AVAILABLE_DECKS',
    decks
  }
}
