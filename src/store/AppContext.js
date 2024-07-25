import { createContext } from "react";

export const initialState = {
  module: "Caliber",
};

export const AppContext = createContext(initialState);
