// @ts-nocheck
import { useReducer } from "react";
import React from "react";
import { initialState, AppContext } from "./AppContext";
import { AppReducer } from "./AppReducer";

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setModule = (module) => {
    dispatch({
      type: "SET_MODULE",
      payload: module,
    });
  };

  const store = { ...state, setModule };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
