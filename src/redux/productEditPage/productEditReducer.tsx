import {
    READ_PRODUCT_FROM_REQUEST,
    READ_PRODUCT_FORM_SUCCESS,
    READ_PRODUCT_FORM_ERROR,
    EDIT_PRODUCT_REQUEST,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_ERROR,
    LOCAL_EDIT_PRODUCT,
    ADD_PRODUCT_REQUEST,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    UPDATE_ERRORS,
    CLEAR_DATA
} from "./productEditTypes"
import Product from "../../domain/Product"
import { validate } from "../../validators/ProductValidator"


const initialState = {
    loading: false,
    product: {},
    error: false,
    updated: false,
    added: false,
    errors:
    {
        isFormValid: true,
        name: '',
        description: '',
        category: '',
        price: ''
    },
}


const reducer = (state = initialState, action: { type: string, payload: Product | {property: string, product: Product} | any }) => {
    switch (action.type) {
        case READ_PRODUCT_FROM_REQUEST:
            return {
                ...state,
                loading: true,
                updated: false,
                added: false
            }
        case READ_PRODUCT_FORM_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload,
                error: false
            }
        case READ_PRODUCT_FORM_ERROR:
            return {
                ...state,
                loading: false,
                product: {},
                error: true
            }
        case EDIT_PRODUCT_REQUEST:
            return {
                ...state,
                updated: false
            }
        case EDIT_PRODUCT_SUCCESS:
            return {
                ...state,
                updated: true
            }
        case EDIT_PRODUCT_ERROR:
            return {
                ...state,
                updated: false
            }
        case LOCAL_EDIT_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
        case ADD_PRODUCT_REQUEST:
            return {
                ...state,
                added: false
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                added: true,
                product: {}
            }
        case ADD_PRODUCT_ERROR:
            return {
                ...state,
                added: false
            }
        case CLEAR_DATA:
            return {
                ...initialState
            }
        case UPDATE_ERRORS:
            return {
                ...state,
                errors: validate(action.payload.property, action.payload.product)
            }
        default:
            return state
    }
}

export default reducer