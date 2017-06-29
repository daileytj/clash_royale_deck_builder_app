const initialState={
  cards: []
}

const getAllAvailableDecks=(state=initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_AVAILABLE_DECKS_SUCCESS':
      return {
        ...state,
        decks: action.response
      }
    default:
      return state;
  }
}

export default getAllAvailableDecks;
