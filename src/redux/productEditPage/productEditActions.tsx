import {
    READ_PRODUCT_EDIT,
    READ_PRODUCT_EDIT_SUCCESS,
    READ_PRODUCT_EDIT_ERROR,
    EDIT_PRODUCT,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_ERROR,
    LOCAL_EDIT_PRODUCT,
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    UPDATE_ERRORS,
    CLEAR_DATA
} from "./productEditTypes"
import Product from "../../domain/Product"
import { findById, update, add } from "../../service/ProductService"
import { validate } from "../../validators/ProductValidator"


export const fetchProductRequest = () => {
    return {
        type: READ_PRODUCT_EDIT
    }
}

export const fetchProductSuccess = (product: Product) => {
    return {
        type: READ_PRODUCT_EDIT_SUCCESS,
        payload: product
    }
}

export const fetchProductError = () => {
    return {
        type: READ_PRODUCT_EDIT_ERROR
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

export const clearDataRequest = () => {
    return {
        type: CLEAR_DATA,
    }
}

export const updateErrors = (errors: any) => {
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
                const product = response.data
                dispatch(fetchProductSuccess(product))
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

export const localUpdateProduct = (property: string, product: Product) => {
    return (dispatch: any) => {
        const errors = validate(property, product)
        dispatch(updateErrors(errors))
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

export const clearData = () => {
    return (dispatch: any) => {
        dispatch(clearDataRequest())
    }
}

