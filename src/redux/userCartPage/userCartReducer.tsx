import CartProduct from "../../domain/CartProduct"
import {
    READ_CART_PRODUCTS,
    READ_CART_PRODUCTS_SUCCESS,
    READ_CART_PRODUCTS_ERROR,
    SEND_ORDER,
    SEND_ORDER_SUCCESS,
    SEND_ORDER_ERROR,
    CLEAR_CART,
    UPDATE_QUANTITY
} from "./userCartTypes"

const initialState = {
    loading: false,
    cartProducts: [],
    error: false,
    sent: false
}

const reducer = (state = initialState, action: { type: string, payload: CartProduct[] | undefined }) => {
    switch (action.type) {
        case READ_CART_PRODUCTS:
            return {
                ...state,
                loading: true,
                sent: false
            }
        case READ_CART_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                cartProducts: action.payload,
                error: false
            }
        case READ_CART_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                cartProducts: [],
                error: true
            }
        case SEND_ORDER:
            return {
                ...state,
                loading: true,
                error: false,
                sent: false
            }
        case SEND_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                sent: true
            }
        case SEND_ORDER_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                sent: false
            }
        case CLEAR_CART:
            return {
                ...state,
                loading: false,
                cartProducts: [],
                error: false,
                sent: false
            }
        case UPDATE_QUANTITY:
            return {
                ...state,
            }
        default:
            return state
    }
}

export default reducer