const sendStateToDecks = (state = [], action) => {
  switch(action.type){
    case 'SEND_STATE_TO_DECKS':
    console.log('sending the state to the decks page');
    break;
    default: return state;
  }
}

export default sendStateToDecks;
