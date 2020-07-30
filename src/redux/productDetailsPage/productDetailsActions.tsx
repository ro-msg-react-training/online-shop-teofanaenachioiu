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
import { findById, deleteById } from "../../service/ProductService"
import { addProductInUserCart } from "../../service/CartService"

export const fetchProductRequest = () => {
    return {
        type: READ_PRODUCT
    }
}

export const fetchProductSuccess = (product: Product) => {
    return {
        type: READ_PRODUCT_SUCCESS,
        payload: product
    }
}

export const fetchProductError = () => {
    return {
        type: READ_PRODUCT_ERROR
    }
}

export const fetchDeleteProduct = () => {
    return {
        type: DELETE_PRODUCT
    }
}

export const fetchDeleteProductSuccess = () => {
    return {
        type: DELETE_PRODUCT_SUCCESS
    }
}

export const fetchDeleteProductError = () => {
    return {
        type: DELETE_PRODUCT_ERROR
    }
}

export const fetchBuyProduct = () => {
    return {
        type: BUY_PRODUCT
    }
}

export const fetchBuyProductSuccess = () => {
    return {
        type: BUY_PRODUCT_SUCCESS
    }
}

export const fetchBuyProductError = () => {
    return {
        type: BUY_PRODUCT_ERROR
    }
}

export const fetchProduct = (id: number) => {
    return (dispatch: any) => {
        dispatch(fetchProductRequest())
        findById(id)
            .then(response => {
                const products = response.data
                dispatch(fetchProductSuccess(products))

            })
            .catch(error => {
                dispatch(fetchProductError())
            })
    }
}


export const fetchDelete = (id: number) => {
    return (dispatch: any) => {
        dispatch(fetchDeleteProduct())
        deleteById(id)
            .then(_ => {
                dispatch(fetchDeleteProductSuccess())
            })
            .catch(_ => {
                dispatch(fetchDeleteProductError())
            })
    }
}

export const fetchBuy = (product: Product) => {
    return (dispatch: any) => {
        dispatch(fetchBuyProduct())
        addProductInUserCart(product)
        dispatch(fetchBuyProductSuccess())
    }
}

export const fetchBuyConfirm = () => {
    return (dispatch: any) => {
        dispatch(fetchBuyProduct())
    }
}