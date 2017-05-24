const getAllAvailableCards = (state = [], action) => {
  switch(action.type){
    case 'GET_ALL_AVAILABLE_CARDS':
    console.log('getting all of the available cards');
    default: return state;
  }
}

export default getAllAvailableCards;
