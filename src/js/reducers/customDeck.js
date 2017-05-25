const customDeck = (state = [], action) => {
  switch(action.type){
    case 'ADD_CARD_TO_CUSTOM_DECK': console.log('adding card...')
    break;
    case 'REMOVE_CARD_FROM_CUSTOM_DECK': console.log('removing card...')
    break;
    default: return state;
  }
  return state;
}

export default customDeck;
