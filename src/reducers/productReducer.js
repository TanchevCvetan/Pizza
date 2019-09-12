import { FETCH_PRODUCTS, ORDER_PRODUCTS_BY_PRIZE } from "../actions/types";

const initialState ={items:[],filteredItems:[],}

export default function(state = initialState,action){
    switch(action.type){
        case FETCH_PRODUCTS:
            return {...state, items:action.payload, filteredItems:action.payload};
        
        case ORDER_PRODUCTS_BY_PRIZE:
            return {
                ...state, 
                filteredItems: action.payload.items,
                sort:action.payload.sort
            }
        default:
            return state;
    }
}