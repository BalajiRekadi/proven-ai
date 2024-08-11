import { createContext } from "react";

export const initialState = {
  module: "Caliber",
  selectedRoute: "",
  client: "",
};

export const AppContext = createContext(initialState);
