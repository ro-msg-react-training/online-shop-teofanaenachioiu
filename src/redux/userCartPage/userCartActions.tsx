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
import { getProductsFromUserCart, sendUserOrder, updateProductFromUserCart } from "../../service/CartService"
import CartProduct from "../../domain/CartProduct"

export const fetchProductsRequest = () => {
    return {
        type: READ_CART_PRODUCTS
    }
}

export const fetchProductsSucces = (cartProducts: CartProduct[]) => {
    return {
        type: READ_CART_PRODUCTS_SUCCESS,
        payload: cartProducts
    }
}

export const fetchProductsError = () => {
    return {
        type: READ_CART_PRODUCTS_ERROR
    }
}

export const sendOrderRequest = () => {
    return {
        type: SEND_ORDER,
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

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}

export const updateProductQuantityRequest = () => {
    return {
        type: UPDATE_QUANTITY,
    }
}

export const fetchUserCartProducts = () => {
    return (dispatch: any) => {
        dispatch(fetchProductsRequest())
        const cartProducts = getProductsFromUserCart()
        dispatch(fetchProductsSucces(cartProducts))
    }
}

export const sendOrder = () => {
    return (dispatch: any) => {
        dispatch(sendOrderRequest())
        sendUserOrder()
            .then((response) => {
                dispatch(sendOrderSucces())
                dispatch(clearCart())
                console.log(response)
            })
            .catch((error) => {
                dispatch(sendOrderError())
                console.log(error)
            })
    }
}

export const updateQuantity = (cartProduct: CartProduct) =>{
    return (dispatch: any) => {
        dispatch(updateProductQuantityRequest())
        updateProductFromUserCart(cartProduct)
    }
}