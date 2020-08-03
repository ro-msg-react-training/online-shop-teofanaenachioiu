import { put, takeLatest, call } from "redux-saga/effects";
import { findById, update, add } from "../../service/ProductService";
import {
    READ_PRODUCT_FORM,
    EDIT_PRODUCT,
    ADD_PRODUCT,
    CLEAR_DATA,
    UPDATE_ERRORS,
    LOCAL_EDIT_PRODUCT
} from "./productEditTypes";
import {
    fetchProductFormRequest,
    fetchProductFormSuccess,
    fetchProductFormError,
    editProductRequest,
    editProductError,
    editProductSuccess,
    addProductRequest,
    addProductSuccess,
    addProductError,
    clearData,
    localEditProduct,
    updateErrors,
} from "./productEditActions";
import {
    FetchProductFormProps,
    EditProductProps,
    UpdateFormErrorsProps
} from "../props";


function* fetchProductFromAsync(action: FetchProductFormProps) {
    try {
        yield put(fetchProductFormRequest())
        const response = yield call(() => findById(action.payload))
        yield put(fetchProductFormSuccess(response.data));
    }
    catch{
        yield put(fetchProductFormError());
    }
}

function* editProductAsync(action: EditProductProps) {
    try {
        yield put(editProductRequest())
        console.log(action.payload)
        yield call(() => update(action.payload))
        yield put(editProductSuccess());
    }
    catch{
        yield put(editProductError());
    }
}

function* addProductAsync(action: EditProductProps) {
    try {
        yield put(addProductRequest())
        console.log(action.payload)
        console.log(action.type)
        console.log('in saga: add product async')
        yield call(() => add(action.payload))
        yield put(addProductSuccess());
    }
    catch{
        yield put(addProductError());
    }
}

function* clearProductData() {
    yield call(() => clearData())
}

function* updateErrorsForm(action: UpdateFormErrorsProps) {
    yield call(() => updateErrors(action.property, action.product))
}

function* localEditProductForm(action: EditProductProps) {
    yield call(() => localEditProduct(action.payload))
}

export function* fetchProductFormWatcher() {
    yield takeLatest(READ_PRODUCT_FORM, fetchProductFromAsync)
}

export function* editProductWatcher() {
    yield takeLatest(EDIT_PRODUCT, editProductAsync)
}

export function* addProductWatcher() {
    yield takeLatest(ADD_PRODUCT, addProductAsync)
}

export function* clearDataWatcher() {
    yield takeLatest(CLEAR_DATA, clearProductData)
}

export function* localEditProductWatcher() {
    yield takeLatest(LOCAL_EDIT_PRODUCT, localEditProductForm)
}

export function* updateFormErrorsWatcher() {
    yield takeLatest(UPDATE_ERRORS, updateErrorsForm)
}