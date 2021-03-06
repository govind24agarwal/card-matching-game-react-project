import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import { data } from "./Data/cardData";

const initialState = {
  firstCard: { id: -1, name: "" },
  secondCard: { id: -1, name: "" },
  hasFlipped: false,
  cardData: [],
  lockBoard: false,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const flipCard = ({ id, name }) => {
    dispatch({ type: "FLIP", payload: { id, name } });
  };

  useEffect(() => {
    dispatch({ type: "LOAD_DATA", payload: data });
  }, []);

  useEffect(() => {
    if (state.firstCard.name !== state.secondCard.name) {
      dispatch({ type: "LOCK_BOARD" });
      setTimeout(() => {
        dispatch({ type: "MATCH_CARDS", payload: data });
      }, 800);
    } else dispatch({ type: "MATCH_CARDS", payload: data });
  }, [state.secondCard]);

  return (
    <AppContext.Provider value={{ ...state, flipCard }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
