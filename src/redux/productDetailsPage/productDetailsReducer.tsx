import {
    READ_PRODUCT_DETAILS_REQUEST,
    READ_PRODUCT_DETAILS_SUCCESS,
    READ_PRODUCT_DETAILS_ERROR,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR,
    BUY_PRODUCT_REQUEST,
    BUY_PRODUCT_SUCCESS,
    BUY_PRODUCT_ERROR,
} from "./productDetailsTypes"
import Product from "../../domain/Product"


const initialState = {
    loading: false,
    product: {},
    error: false,
    deleted: false,
    bought: false
}


const reducer = (state = initialState, action: { type: string, payload: Product | {} | number }) => {
    switch (action.type) {
        case READ_PRODUCT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
                deleted: false,
                bought: false
            }
        case READ_PRODUCT_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload,
                error: false
            }
        case READ_PRODUCT_DETAILS_ERROR:
            return {
                ...state,
                loading: false,
                product: {},
                error: true
            }
        case DELETE_PRODUCT_REQUEST:
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
        case BUY_PRODUCT_REQUEST:
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