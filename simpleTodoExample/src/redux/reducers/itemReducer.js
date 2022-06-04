import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function itemReducer(state = initialState.items, action) {
  switch (action.type) {
    case actionTypes.ADD_NEW_ITEM_SUCCESS:
      const isAdded = state.find((item) => item === action.payload);
      if (isAdded) {
        return state;
      } else {
        return [...state, action.payload];
      }
    case actionTypes.REMOVE_ITEM_SUCCESS:
        const isAdded2 = state.filter((item) => item !== action.payload);
        if (isAdded2) {
          return isAdded2;
        } else {
          return isAdded2;
        }
    default:
      return state;
  }
}
