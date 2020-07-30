import {
    READ_PRODUCTS,
    READ_PRODUCTS_SUCCESS,
    READ_PRODUCTS_ERROR
} from "./productListTypes"
import Product from "../../domain/Product"

const initialState = {
    loading: false,
    products: [],
    error: false
}

const reducer = (state = initialState, action: { type: string, payload: Product[] | undefined }) => {
    switch (action.type) {
        case READ_PRODUCTS:
            return {
                ...state,
                loading: true
            }
        case READ_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload,
                error: false
            }
        case READ_PRODUCTS_ERROR:
            return {
                loading: false,
                products: [],
                error: true
            }
        default:
            return state
    }
}

export default reducer