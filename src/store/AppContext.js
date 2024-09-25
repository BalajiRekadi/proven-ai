import { createContext } from "react";

export const initialState = {
  module: "",
  selectedRoute: "",
  selectedTaskId: "",
  client: "",
};

export const AppContext = createContext(initialState);
