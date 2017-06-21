// import * as actions from '../actions/index';

const initialState = {
  cards: [],
}

const getAllAvailableCards = (state = initialState, action) => {
  switch(action.type){
    case 'GET_ALL_AVAILABLE_CARDS':
    // console.log('getting all of the available cards');
    break;
    case 'GET_ALL_CARDS_SUCCESS':
    // console.log('get all available cards success!');
    state = Object.assign({}, state, {cards: action.cards});
    // console.log('state from get all cards success reducer',state);
    return state;
    default: return state;
  }
}

export default getAllAvailableCards;
