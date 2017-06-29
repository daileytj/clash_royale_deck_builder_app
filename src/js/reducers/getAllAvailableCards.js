// import * as actions from '../actions/index';

const initialState={
  cards: []
}

const getAllAvailableCards=(state=initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_AVAILABLE_CARDS_SUCCESS':
      return {
        ...state,
        cards: action.response
      }
    default:
      return state;
  }
}

export default getAllAvailableCards;
