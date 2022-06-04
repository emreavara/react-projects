import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function itemReducer(state = initialState.items, action) {
  switch (action.type) {
    case actionTypes.ADD_NEW_ITEM_SUCCESS:
      return [...state, action.payload];
    case actionTypes.REMOVE_ITEM_SUCCESS:
      const newState2 = state.filter((item) => item !== action.payload);
      return newState2;
    default:
      return state;
  }
}
