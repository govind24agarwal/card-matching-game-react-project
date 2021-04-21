const reducer = (state, action) => {
  if (action.type === "LOAD_DATA") {
    return { ...state, cardData: action.payload };
  }

  if (action.type === "FLIP") {
    return {
      ...state,
      cardData: state.cardData.map((card) => {
        if (card.id === action.payload) return { ...card, flip: !card.flip };
        return card;
      }),
    };
  }

  return state;
};

export default reducer;
