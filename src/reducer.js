const reducer = (state, action) => {
  if (action.type === "LOAD_DATA") {
    return { ...state, cardData: action.payload };
  }

  if (action.type === "FLIP") {
    if (state.lockBoard) return state;
    if (state.firstCard.id === action.payload.id) return state;

    if (!state.hasFlipped) {
      return {
        ...state,
        cardData: state.cardData.map((card) => {
          if (card.id === action.payload.id) return { ...card, flip: true };
          return card;
        }),
        firstCard: action.payload,
        hasFlipped: true,
      };
    } else {
      return {
        ...state,
        cardData: state.cardData.map((card) => {
          if (card.id === action.payload.id) return { ...card, flip: true };
          return card;
        }),
        secondCard: action.payload,
        hasFlipped: false,
      };
    }
  }

  if (action.type === "MATCH_CARDS") {
    if (state.firstCard.name === state.secondCard.name) {
      return {
        ...state,
        cardData: state.cardData.map((card) => {
          if (
            card.id === state.firstCard.id ||
            card.id === state.secondCard.id
          ) {
            return { ...card, matched: true };
          }
          return card;
        }),
        // firstCard: { id: -1, name: "" },
        // secondCard: { id: -1, name: "" },
      };
    }

    if (state.firstCard.name !== state.secondCard.name) {
      return {
        ...state,
        cardData: state.cardData.map((card) => {
          if (
            card.id === state.firstCard.id ||
            card.id === state.secondCard.id
          ) {
            return { ...card, flip: false };
          }
          return card;
        }),
        lockBoard: false,
        firstCard: { id: -1, name: "" },
        secondCard: { id: -1, name: "" },
      };
    }
  }

  if (action.type === "LOCK_BOARD") {
    return { ...state, lockBoard: true };
  }
  return state;
};

export default reducer;
