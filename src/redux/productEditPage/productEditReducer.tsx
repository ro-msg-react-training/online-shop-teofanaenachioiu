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

const reducer = (state = initialState, action: { type: string, payload: Product | {} }) => {
    switch (action.type) {
        case CLEAR_DATA:
            console.log('in reducerrrrrr')
            return {
                ...initialState
            }
        case READ_PRODUCT_EDIT:
            return {
                ...state,
                loading: true,
                updated: false,
                added: false
            }
        case READ_PRODUCT_EDIT_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload,
                error: false
            }
        case READ_PRODUCT_EDIT_ERROR:
            return {
                ...state,
                loading: false,
                product: {},
                error: true
            }
        case EDIT_PRODUCT:
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
        case ADD_PRODUCT:
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
        case UPDATE_ERRORS:
            return {
                ...state,
                errors: action.payload
            }
        
        default:
            return state
    }
}

export default reducer