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

const GET_ALL_AVAILABLE_DECKS_TRIGGERED='GET_ALL_AVAILABLE_DECKS_TRIGGERED';
const GET_ALL_AVAILABLE_DECKS_SUCCESS='GET_ALL_AVAILABLE_DECKS_SUCCESS';
const GET_ALL_AVAILABLE_DECKS_FAILURE='GET_ALL_AVAILABLE_DECKS_FAILURE';

export const getAllAvailableDecks=()=> {
    const promise=fetch('http://localhost:8080/decks/');
    return{
          onRequest: GET_ALL_AVAILABLE_DECKS_TRIGGERED,
          onSuccess: GET_ALL_AVAILABLE_DECKS_SUCCESS,
          onFailure: GET_ALL_AVAILABLE_DECKS_FAILURE,
          promise,
    };
}

const ADD_NEW_CUSTOM_DECK_TRIGGERED='ADD_NEW_CUSTOM_DECK_TRIGGERED';
const ADD_NEW_CUSTOM_DECK_SUCCESS='ADD_NEW_CUSTOM_DECK_SUCCESS';
const ADD_NEW_CUSTOM_DECK_FAILURE='ADD_NEW_CUSTOM_DECK_FAILURE';

export const addNewCustomDeck=(title, strategy, customDeck)=>{
  console.log("------params from addNewCustomDeck action creator-----");
  console.log("title:", title);
  console.log("strategy:", strategy);
  console.log("customDeck:", customDeck);
  const promise = fetch('http://localhost:8080/decks/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          title: title,
          strategy: strategy,
          customDeck: customDeck,
      }),
  });
  return {
      onRequest: ADD_NEW_CUSTOM_DECK_TRIGGERED,
      onSuccess: ADD_NEW_CUSTOM_DECK_SUCCESS,
      onFailure: ADD_NEW_CUSTOM_DECK_FAILURE,
      promise,
  };
}
