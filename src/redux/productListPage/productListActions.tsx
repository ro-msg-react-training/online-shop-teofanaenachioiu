import {
    READ_PRODUCTS,
    READ_PRODUCTS_SUCCESS,
    READ_PRODUCTS_ERROR
} from "./productListTypes"
import Product from "../../domain/Product"
import { getAll } from "../../service/ProductService"

export const fetchProductsRequest = () => {
    return {
        type: READ_PRODUCTS
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

export const fetchProducts = () => {
    return (dispatch: any) => {
        dispatch(fetchProductsRequest())
        getAll()
            .then(response => {
                const products = response.data
                dispatch(fetchProductsSucces(products))
            })
            .catch(error => {
                dispatch(fetchProductsError())
            })
    }
}