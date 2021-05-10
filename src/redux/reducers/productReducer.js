import {ActionTypes} from "../constants/action-type"

const initialState = {
    products: []
}

// export const productReducer = (state, action)
export const productReducer = (state=initialState, {type,payload}) => { //destructing action
    console.warn("initialstate",initialState)
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload}
            
        default:
            return state
    }
    
}