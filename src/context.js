import React, { useContext, useReducer } from "react";
import { getPersistentFaves } from "./helpers/persistentData";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  faves: getPersistentFaves(),
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setFav = (data) => {
    dispatch({ type: "SET_FAV", payload: data });
  };

  const deleteFav = (id) => {
    dispatch({ type: "DELETE_FAV", payload: id });
  };

  return (
    <AppContext.Provider value={{ ...state, setFav, deleteFav }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
