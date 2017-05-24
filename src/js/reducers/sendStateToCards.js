const sendStateToCards = (state = [], action) => {
  switch(action.type){
    case 'SEND_STATE_TO_CARDS':
    console.log('sending the state to the cards page');
    break;
    default: return state;
  }
}

export default sendStateToCards;
