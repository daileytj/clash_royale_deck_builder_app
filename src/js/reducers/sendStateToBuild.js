const sendStateToBuild = (state = [], action) => {
  switch(action.type){
    case 'SEND_STATE_TO_BUILD':
    console.log('sending the state to the build page');
    default: return state;
  }
}

export default sendStateToBuild;
