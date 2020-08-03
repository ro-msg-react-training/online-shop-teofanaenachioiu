import {
    READ_PRODUCTS,
    READ_PRODUCTS_SUCCESS,
    READ_PRODUCTS_ERROR,
    READ_PRODUCTS_REQUEST
} from "./productListTypes"
import Product from "../../domain/Product"


export const fetchProducts = () => {
    return {
        type: READ_PRODUCTS
    }
}

export const fetchProductsRequest = () => {
    return {
        type: READ_PRODUCTS_REQUEST
    }
}

export const fetchProductsSucces = (products: Product[]) => {
    return {
        type: READ_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const fetchProductsError = () => {
    return {
        type: READ_PRODUCTS_ERROR
    }
}