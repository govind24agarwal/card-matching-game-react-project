import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import { data } from "./Data/cardData";

const initialState = {
  firstCard: -1,
  secondcard: -1,
  cardData: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const flipCard = (id) => {
    dispatch({ type: "FLIP", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "LOAD_DATA", payload: data });
  }, []);

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
