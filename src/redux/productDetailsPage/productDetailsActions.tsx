import {
    READ_PRODUCT_DETAILS_REQUEST,
    READ_PRODUCT_DETAILS_SUCCESS,
    READ_PRODUCT_DETAILS_ERROR,
    DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_ERROR,
    BUY_PRODUCT,
    BUY_PRODUCT_SUCCESS,
    BUY_PRODUCT_ERROR,
    READ_PRODUCT_DETAILS,
    DELETE_PRODUCT_REQUEST,
    BUY_PRODUCT_REQUEST
} from "./productDetailsTypes"
import Product from "../../domain/Product"


export const fetchProductDetails = (id: number) => {
    return {
        type: READ_PRODUCT_DETAILS,
        payload: id
    }
}

export const fetchProductDetailRequest = () => {
    return {
        type: READ_PRODUCT_DETAILS_REQUEST
    }
}

export const fetchProductDetailSucces = (product: Product) => {
    return {
        type: READ_PRODUCT_DETAILS_SUCCESS,
        payload: product
    }
}

export const fetchProductDetailError = () => {
    return {
        type: READ_PRODUCT_DETAILS_ERROR
    }
}

export const deleteProduct = (id: number) => {
    return {
        type: DELETE_PRODUCT,
        payload: id
    }
}

export const deleteProductRequest = () => {
    return {
        type: DELETE_PRODUCT_REQUEST
    }
}

export const deleteProductSuccess = () => {
    return {
        type: DELETE_PRODUCT_SUCCESS
    }
}

export const deleteProductError = () => {
    return {
        type: DELETE_PRODUCT_ERROR
    }
}

export const buyProduct = (product: Product) => {
    return {
        type: BUY_PRODUCT,
        payload: product
    }
}

export const buyProductRequest = () => {
    return {
        type: BUY_PRODUCT_REQUEST
    }
}

export const buyProductSuccess = () => {
    return {
        type: BUY_PRODUCT_SUCCESS
    }
}

export const buyProductError = () => {
    return {
        type: BUY_PRODUCT_ERROR
    }
}