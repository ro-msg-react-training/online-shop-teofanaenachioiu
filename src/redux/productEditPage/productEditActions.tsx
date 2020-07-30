import {
    READ_PRODUCT,
    READ_PRODUCT_SUCCESS,
    READ_PRODUCT_ERROR,
    EDIT_PRODUCT,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_ERROR,
    LOCAL_EDIT_PRODUCT,
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    UPDATE_ERRORS
} from "./productEditTypes"
import Product from "../../domain/Product"
import { findById, update, add } from "../../service/ProductService"
import { validate } from "../../service/ProductValidator"


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

export const updateProductRequest = () => {
    return {
        type: EDIT_PRODUCT
    }
}

export const updateProductSuccess = () => {
    return {
        type: EDIT_PRODUCT_SUCCESS
    }
}

export const updateProductError = () => {
    return {
        type: EDIT_PRODUCT_ERROR
    }
}

export const addProductRequest = () => {
    return {
        type: ADD_PRODUCT
    }
}

export const addProductSuccess = () => {
    return {
        type: ADD_PRODUCT_SUCCESS
    }
}

export const addProductError = () => {
    return {
        type: ADD_PRODUCT_ERROR
    }
}

export const localUpdateProductRequest = (product: Product) => {
    return {
        type: LOCAL_EDIT_PRODUCT,
        payload: product
    }
}

export const updateErrors = (errors: any) => {
    console.log("frum actions de update ", errors)
    return {
        type: UPDATE_ERRORS,
        payload: errors
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
            .catch(_ => {
                dispatch(fetchProductError())
            })
    }
}


export const updateProduct = (product: Product) => {
    return (dispatch: any) => {
        dispatch(updateProductRequest())
        update(product)
            .then(_ => {
                dispatch(updateProductSuccess())
            })
            .catch(_ => {
                dispatch(updateProductError())
            })
    }
}

export const localUpdateProduct = (product: Product) => {
    return (dispatch: any) => {
        // validate form 
        const errors = validate(product)
        updateErrors(errors)
        dispatch(localUpdateProductRequest(product))
    }
}

export const addProduct = (product: Product) => {
    return (dispatch: any) => {
        dispatch(addProductRequest())
        add(product)
            .then(_ => {
                dispatch(addProductSuccess())
            })
            .catch(_ => {
                dispatch(addProductError())
            })
    }
}