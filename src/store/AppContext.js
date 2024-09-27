import { createContext } from "react";

export const initialState = {
  module: "",
  selectedRoute: "",
  selectedTaskId: "",
  client: "",
  user: {},
};

export const AppContext = createContext(initialState);
