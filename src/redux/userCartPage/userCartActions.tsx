import {
    READ_CART_PRODUCTS,
    READ_CART_PRODUCTS_REQUEST,
    READ_CART_PRODUCTS_SUCCESS,
    READ_CART_PRODUCTS_ERROR,
    SEND_ORDER,
    SEND_ORDER_REQUEST,
    SEND_ORDER_SUCCESS,
    SEND_ORDER_ERROR, 
    UPDATE_PRODUCT_QUANTITY
} from "./userCartTypes"
import CartProduct from "../../domain/CartProduct"


export const fetchCartProducts = () => {
    return {
        type: READ_CART_PRODUCTS
    }
}

export const fetchCartProductsRequest = () => {
    return {
        type: READ_CART_PRODUCTS_REQUEST
    }
}

export const fetchCartProductsSucces = (cartProducts: CartProduct[]) => {
    return {
        type: READ_CART_PRODUCTS_SUCCESS,
        payload: cartProducts
    }
}

export const fetchCartProductsError = () => {
    return {
        type: READ_CART_PRODUCTS_ERROR
    }
}

export const sendOrder = () => {
    return {
        type: SEND_ORDER,
    }
}

export const sendOrderRequest = () => {
    return {
        type: SEND_ORDER_REQUEST,
    }
}

export const sendOrderSucces = () => {
    return {
        type: SEND_ORDER_SUCCESS,
    }
}

export const sendOrderError = () => {
    return {
        type: SEND_ORDER_ERROR
    }
}

export const updateProductQuantity = (cartProduct: CartProduct) => {
    return {
        type: UPDATE_PRODUCT_QUANTITY,
        payload: cartProduct
    }
}