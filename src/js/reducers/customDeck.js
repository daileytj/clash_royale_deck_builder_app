const initialState = {
  "customDeck": {
    "card1": {
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
    case 'ADD_CARD_TO_CUSTOM_DECK': console.log('adding card...')
    break;
    case 'REMOVE_CARD_FROM_CUSTOM_DECK': console.log('removing card...')
    break;
    case 'DISPLAY_CUSTOM_DECK': console.log('displaying custom deck...')
    return state;
    default: return state;
  }
  return state;
}

export default customDeck;
