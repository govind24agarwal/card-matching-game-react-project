import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
const initialState = {
  firstCard: -1,
  secondcard: -1,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value="hello world">{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
