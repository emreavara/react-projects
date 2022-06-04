import * as actionTypes from "./actionTypes";

export function addNewItemSuccess(newItem) {
  return { type: actionTypes.ADD_NEW_ITEM_SUCCESS, payload: newItem };
}

export function removeItemSuccess(newItem) {
    return { type: actionTypes.REMOVE_ITEM_SUCCESS, payload: newItem };
  }