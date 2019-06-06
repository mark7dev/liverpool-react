import { SHOW_PRODUCTS } from '../actions/types';

const initialState = {
    products: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SHOW_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }

        default:
            return state;
    }
}