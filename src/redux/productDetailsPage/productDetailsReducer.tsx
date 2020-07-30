import {
    READ_PRODUCT,
    READ_PRODUCT_SUCCESS,
    READ_PRODUCT_ERROR,
    DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR,
    BUY_PRODUCT,
    BUY_PRODUCT_SUCCESS,
    BUY_PRODUCT_ERROR
} from "./productDetailsTypes"
import Product from "../../domain/Product"

const initialState = {
    loading: false,
    product: {},
    error: false,
    deleted: false,
    bought: false
}

const reducer = (state = initialState, action: { type: string, payload: Product | {} }) => {
    switch (action.type) {
        case READ_PRODUCT:
            return {
                ...state,
                loading: true,
                deleted: false,
                bought: false
            }
        case READ_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload,
                error: false
            }
        case READ_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                product: {},
                error: true
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                deleted: false
            }
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                deleted: true
            }
        case DELETE_PRODUCT_ERROR:
            return {
                ...state,
                deleted: false
            }
        case BUY_PRODUCT:
            return {
                ...state,
                bought: false
            }
        case BUY_PRODUCT_SUCCESS:
            return {
                ...state,
                bought: true
            }
        case BUY_PRODUCT_ERROR:
            return {
                ...state,
                bought: false
            }
        default:
            return state
    }
}

export default reducer