export const AppReducer = (state, action) => {
  switch (action.type) {
    case "SET_MODULE":
      return {
        ...state,
        module: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
