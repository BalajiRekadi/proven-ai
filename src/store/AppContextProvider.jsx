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

  const setClient = (client) => {
    dispatch({
      type: "SET_CLIENT",
      payload: client,
    });
  };

  const setRoute = (route) => {
    dispatch({
      type: "SET_ROUTE",
      payload: route,
    });
  };

  const setTaskId = (id) => {
    dispatch({
      type: "SET_TASKID",
      payload: id,
    });
  };

  const store = { ...state, setModule, setRoute, setClient, setTaskId };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
