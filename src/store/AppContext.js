import { createContext } from "react";

export const initialState = {
  module: "Caliber",
  selectedRoute: "",
};

export const AppContext = createContext(initialState);
