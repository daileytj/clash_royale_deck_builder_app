const initialState={
  cards: []
};

export default function customDecks(state=initialState, action) {
  switch (action.type) {
    case 'ADD_CARD_TO_CUSTOM_DECK':
      {
        let cloneCards=false;
        if (state.cards.length < 8) {
          cloneCards=state.cards.slice();
          cloneCards.push(action.card);
        }
        return {
          ...state,
          cards: cloneCards || state.cards
        };
      }
    case 'REMOVE_CARD_FROM_CUSTOM_DECK':
      {
        const newCard=[
          ...state.cards.slice(0, action.cardIndex),
          ...state.cards.slice(action.cardIndex + 1)
        ];
        return {
          ...state,
          cards: newCard
        };
      }
    default:
      {
        return state;
      }
  }
}
