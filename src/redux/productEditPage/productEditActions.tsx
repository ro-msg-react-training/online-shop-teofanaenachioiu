import {
    READ_PRODUCT_FORM,
    READ_PRODUCT_FROM_REQUEST,
    READ_PRODUCT_FORM_SUCCESS,
    READ_PRODUCT_FORM_ERROR,
    EDIT_PRODUCT,
    EDIT_PRODUCT_REQUEST,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_ERROR,
    LOCAL_EDIT_PRODUCT,
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    UPDATE_ERRORS,
    CLEAR_DATA,
    ADD_PRODUCT_REQUEST
} from "./productEditTypes"
import Product from "../../domain/Product"


export const fetchProductForm = (id: number) => {
    return {
        type: READ_PRODUCT_FORM,
        payload: id
    }
}

export const fetchProductFormRequest = () => {
    return {
        type: READ_PRODUCT_FROM_REQUEST
    }
}

export const fetchProductFormSuccess = (product: Product) => {
    return {
        type: READ_PRODUCT_FORM_SUCCESS,
        payload: product
    }
}

export const fetchProductFormError = () => {
    return {
        type: READ_PRODUCT_FORM_ERROR
    }
}

export const editProduct = (product: Product) => {
    return {
        type: EDIT_PRODUCT,
        payload: product
    }
}

export const editProductRequest = () => {
    return {
        type: EDIT_PRODUCT_REQUEST
    }
}

export const editProductSuccess = () => {
    return {
        type: EDIT_PRODUCT_SUCCESS
    }
}

export const editProductError = () => {
    return {
        type: EDIT_PRODUCT_ERROR
    }
}

export const addProduct = (product: Product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

export const addProductRequest = () => {
    return {
        type: ADD_PRODUCT_REQUEST
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

export const localEditProduct = (product: Product) => {
    return {
        type: LOCAL_EDIT_PRODUCT,
        payload: product
    }
}

export const clearData = () => {
    return {
        type: CLEAR_DATA,
    }
}

export const updateErrors = (property: string, product: Product) => {
    return {
        type: UPDATE_ERRORS,
        payload: {
            property: property,
            product: product
        }
    }
}