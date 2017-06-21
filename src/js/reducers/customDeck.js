const initialState = {
  "customDeck": {
    "card1": {
    "customSlotNumber": 1,
    "_id": "58d176a56d804500104b124e",
    "idName": "bomber",
    "rarity": "Common",
    "type": "Troop",
    "name": "Bomber",
    "description": "Small, lightly protected skeleton that throws bombs. Deals area damage that can wipe out a swarm of enemies.",
    "arena": 0,
    "elixirCost": 3,
    "order": 2,
    "__v": 0
    },
    "card2": {
      "customSlotNumber": 2,
      "_id": "blank",
      "idName": "blank",
      "rarity": "",
      "type": "",
      "name": "Blank",
      "description": "An Empty Space",
      "arena": 0,
      "elixirCost": 0,
      "order": 0,
      "__v": 0,
      "image": 'blank'
    },
    "card3": {
      "customSlotNumber": 3,
      "_id": "blank",
      "idName": "blank",
      "rarity": "",
      "type": "",
      "name": "Blank",
      "description": "An Empty Space",
      "arena": 0,
      "elixirCost": 0,
      "order": 0,
      "__v": 0,
      "image": 'blank'
    },
    "card4": {
      "customSlotNumber": 4,
      "_id": "blank",
      "idName": "blank",
      "rarity": "",
      "type": "",
      "name": "Blank",
      "description": "An Empty Space",
      "arena": 0,
      "elixirCost": 0,
      "order": 0,
      "__v": 0,
      "image": 'blank'
    },
    "card5": {
      "customSlotNumber": 5,
      "_id": "blank",
      "idName": "blank",
      "rarity": "",
      "type": "",
      "name": "Blank",
      "description": "An Empty Space",
      "arena": 0,
      "elixirCost": 0,
      "order": 0,
      "__v": 0,
      "image": 'blank'
    },
    "card6": {
      "customSlotNumber": 6,
      "_id": "blank",
      "idName": "blank",
      "rarity": "",
      "type": "",
      "name": "Blank",
      "description": "An Empty Space",
      "arena": 0,
      "elixirCost": 0,
      "order": 0,
      "__v": 0,
      "image": 'blank'
    },
    "card7": {
      "customSlotNumber": 7,
      "_id": "blank",
      "idName": "blank",
      "rarity": "",
      "type": "",
      "name": "Blank",
      "description": "An Empty Space",
      "arena": 0,
      "elixirCost": 0,
      "order": 0,
      "__v": 0,
      "image": 'blank'
    },
    "card8": {
      "customSlotNumber": 8,
      "_id": "blank",
      "idName": "blank",
      "rarity": "",
      "type": "",
      "name": "Blank",
      "description": "An Empty Space",
      "arena": 0,
      "elixirCost": 0,
      "order": 0,
      "__v": 0,
      "image": 'blank'
    }
  }
}

const customDeck = (state = [initialState], action) => {
  switch(action.type){
    case 'ADD_CARD_TO_CUSTOM_DECK':
      console.log('adding card...')
      console.log("...")
    //   let slotToFill = null;
    //   const findFirstEmptySlot = (currentState) = {
    //   for(var i = 0; i < 8; i +=1){
    //     if(currentState.customDeck[i].idName == "blank"){
    //       slotToFill = i;
    //       break;
    //     }
    //   }
    // }
    //   findFirstEmptySlot(state);
      if(state[0].customDeck.card1.idName === "blank"){
        return {
          ...state,
          0:{
            "customDeck":{
          "card1": {
            ...action.card,
            "customSlotNumber": 1
        },
          "card2": state[0].customDeck.card2,
          "card3": state[0].customDeck.card3,
          "card4": state[0].customDeck.card4,
          "card5": state[0].customDeck.card5,
          "card6": state[0].customDeck.card6,
          "card7": state[0].customDeck.card7,
          "card8": state[0].customDeck.card8
        }
      }
    }
  }
  else if(state[0].customDeck.card2.idName === "blank"){
    return {
      ...state,
      0:{
        "customDeck":{
      "card1": state[0].customDeck.card1,
      "card2": {
        ...action.card,
        "customSlotNumber": 2
    },
      "card3": state[0].customDeck.card3,
      "card4": state[0].customDeck.card4,
      "card5": state[0].customDeck.card5,
      "card6": state[0].customDeck.card6,
      "card7": state[0].customDeck.card7,
      "card8": state[0].customDeck.card8
    }
  }
}
}
else if(state[0].customDeck.card3.idName === "blank"){
  return {
    ...state,
    0:{
      "customDeck":{
    "card1": state[0].customDeck.card1,
    "card2": state[0].customDeck.card2,
    "card3": {
      ...action.card,
      "customSlotNumber": 3
  },
    "card4": state[0].customDeck.card4,
    "card5": state[0].customDeck.card5,
    "card6": state[0].customDeck.card6,
    "card7": state[0].customDeck.card7,
    "card8": state[0].customDeck.card8
  }
}
}
}
else if(state[0].customDeck.card4.idName === "blank"){
  return {
    ...state,
    0:{
      "customDeck":{
    "card1": state[0].customDeck.card1,
    "card2": state[0].customDeck.card2,
    "card3": state[0].customDeck.card3,
    "card4": {
      ...action.card,
      "customSlotNumber": 4
  },
    "card5": state[0].customDeck.card5,
    "card6": state[0].customDeck.card6,
    "card7": state[0].customDeck.card7,
    "card8": state[0].customDeck.card8
  }
}
}
}
else if(state[0].customDeck.card5.idName === "blank"){
  return {
    ...state,
    0:{
      "customDeck":{
    "card1": state[0].customDeck.card1,
    "card2": state[0].customDeck.card2,
    "card3": state[0].customDeck.card3,
    "card4": state[0].customDeck.card4,
    "card5": {
      ...action.card,
      "customSlotNumber": 5
  },
    "card6": state[0].customDeck.card6,
    "card7": state[0].customDeck.card7,
    "card8": state[0].customDeck.card8
  }
}
}
}
else if(state[0].customDeck.card6.idName === "blank"){
  return {
    ...state,
    0:{
      "customDeck":{
    "card1": state[0].customDeck.card1,
    "card2": state[0].customDeck.card2,
    "card3": state[0].customDeck.card3,
    "card4": state[0].customDeck.card4,
    "card5": state[0].customDeck.card5,
    "card6": {
      ...action.card,
      "customSlotNumber": 6
  },
    "card7": state[0].customDeck.card7,
    "card8": state[0].customDeck.card8
  }
}
}
}
else if(state[0].customDeck.card7.idName === "blank"){
  return {
    ...state,
    0:{
      "customDeck":{
    "card1": state[0].customDeck.card1,
    "card2": state[0].customDeck.card2,
    "card3": state[0].customDeck.card3,
    "card4": state[0].customDeck.card4,
    "card5": state[0].customDeck.card5,
    "card6": state[0].customDeck.card6,
    "card7": {
      ...action.card,
      "customSlotNumber": 7
  },
    "card8": state[0].customDeck.card8
  }
}
}
}
else if(state[0].customDeck.card8.idName === "blank"){
  return {
    ...state,
    0:{
      "customDeck":{
    "card1": state[0].customDeck.card1,
    "card2": state[0].customDeck.card2,
    "card3": state[0].customDeck.card3,
    "card4": state[0].customDeck.card4,
    "card5": state[0].customDeck.card5,
    "card6": state[0].customDeck.card6,
    "card7": state[0].customDeck.card7,
    "card8": {
      ...action.card,
      "customSlotNumber": 8
  }
  }
}
}
}

break;
    case 'REMOVE_CARD_FROM_CUSTOM_DECK':
      console.log('removing card...');
    break;
    case 'DISPLAY_CUSTOM_DECK': console.log('displaying custom deck...')
    return state;
    default: return state;
  }
  return state;
}

export default customDeck;
