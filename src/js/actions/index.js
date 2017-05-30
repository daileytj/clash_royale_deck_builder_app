// import 'isomorphic-fetch';
//
// export const GET_ALL_CARDS_SUCCESS = 'GET_ALL_CARDS_SUCCESS';
// export const getAllCardsSuccess = () => ({
//     type: GET_ALL_CARDS_SUCCESS,
//     cards
// });
//
// export const getAllCards = () => dispatch => {
//   const url = 'http://www.clashapi.xyz/cards';
//   return fetch(url).then(response => {
//       if (!response.ok) {
//           throw new Error(response.statusText);
//       }
//       return response;
//   })
//       .then(response => response.json())
//       .then(data => {
//           dispatch(getAllCardsSuccess(data.cards));
//           })
//       .catch(error =>
//              console.log(error)
//             );
// };

export const getAllAvailableCards = cards => {
  return {
    type: 'GET_ALL_AVAILABLE_CARDS',
    cards
  }
}

export const getAllAvailableDecks = decks => {
  return {
    type: 'GET_ALL_AVAILABLE_DECKS',
    decks
  }
}

export const sendStateToBuild = state => {
  return {
    type: 'SEND_STATE_TO_BUILD',
    state
  }
}

export const sendStateToDecks = state => {
  return {
    type: 'SEND_STATE_TO_DECKS',
    state
  }
}

export const sendStateToCards = state => {
  return {
    type: 'SEND_STATE_TO_CARDS',
    state
  }
}

export const addCardToCustomDeck = card => {
  return {
    type: 'ADD_CARD_TO_CUSTOM_DECK',
    card
  }
}

export const removeCardFromCustomDeck = card => {
  return {
    type: 'REMOVE_CARD_FROM_CUSTOM_DECK',
    card
  }
}

export const displayCustomDeck = () => {
  return {
    type: 'DISPLAY_CUSTOM_DECK'
  }
}
