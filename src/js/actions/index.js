import 'isomorphic-fetch';

export const GET_ALL_CARDS_SUCCESS = 'GET_ALL_CARDS_SUCCESS';
export const getAllCardsSuccess = cards => {
      return {
        type: GET_ALL_CARDS_SUCCESS,
        cards
      }
    };


export const getAllAvailableCards = () => dispatch => {
  const url = 'http://www.clashapi.xyz/api/cards';
  return fetch(url).then(response => {
      if (!response.ok) {
          throw new Error(response.statusText);
      }
      return response;
  })
      .then(response => response.json())
      .then(data => {
          // console.log(dispatch(getAllCardsSuccess(data)));
          dispatch(getAllCardsSuccess(data));
          })
      .catch(error =>
             console.log(error)
            );
};

// export const getAllAvailableCards = cards => {
//   return {
//     type: 'GET_ALL_AVAILABLE_CARDS',
//     cards
//   }
// }

export const getAllAvailableDecks = decks => {
  return {
    type: 'GET_ALL_AVAILABLE_DECKS',
    decks
  }
}

export const addCardToCustomDeck = card => {
  return {
    type: 'ADD_CARD_TO_CUSTOM_DECK',
    card
  }
}

export const removeCardFromCustomDeck = cardIndex => {
  return {
    type: 'REMOVE_CARD_FROM_CUSTOM_DECK',
    cardIndex
  }
}

export const displayCustomDeck = () => {
  return {
    type: 'DISPLAY_CUSTOM_DECK'
  }
}
