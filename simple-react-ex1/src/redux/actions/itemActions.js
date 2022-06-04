import * as actionTypes from "./actionTypes"
export function addNewItemSuccess(newItem){
    return {type:actionTypes.ADD_NEW_ITEM_SUCCESS, payload: newItem}
}