import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function itemReducer(state=initialState.items, action){
    switch(action.type){
        case actionTypes.ADD_NEW_ITEM_SUCCESS:
            return [...state, action.payload];
        default:
            return state;
    }
}