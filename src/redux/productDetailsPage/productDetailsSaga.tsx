import { findById, deleteById } from "../../service/ProductService";
import { put, takeLatest, call } from "redux-saga/effects";
import {
    READ_PRODUCT_DETAILS,
    DELETE_PRODUCT,
    BUY_PRODUCT
} from "./productDetailsTypes";
import {
    fetchProductDetailRequest,
    fetchProductDetailSucces,
    fetchProductDetailError,
    deleteProductRequest,
    deleteProductSuccess,
    deleteProductError,
    buyProductRequest,
    buyProductSuccess,
    buyProductError,
} from "./productDetailsActions";
import { addProductInUserCart } from "../../service/CartService";
import { 
    FetchProductDetailsProps, 
    DeleteProductProps, 
    BuyProductProps 
} from "../props";


function* fetchProductDetailsAsync(action: FetchProductDetailsProps) {
    try {
        yield put(fetchProductDetailRequest())
        const response = yield call(() => findById(action.payload))
        yield put(fetchProductDetailSucces(response.data));
    }
    catch{
        yield put(fetchProductDetailError());
    }
}

function* deleteProductAsync(action: DeleteProductProps) {
    try {
        yield put(deleteProductRequest())
        yield call(() => deleteById(action.payload))
        yield put(deleteProductSuccess());
    }
    catch{
        yield put(deleteProductError());
    }
}

function* buyProductAsync(action: BuyProductProps) {
    try {
        yield put(buyProductRequest())
        yield call(() => addProductInUserCart(action.payload))
        yield put(buyProductSuccess());
    }
    catch{
        yield put(buyProductError());
    }
}

export function* fetchProdictDetailsWatcher() {
    yield takeLatest(READ_PRODUCT_DETAILS, fetchProductDetailsAsync)
}

export function* deleteProductWatcher() {
    yield takeLatest(DELETE_PRODUCT, deleteProductAsync)
}

export function* buyProductWatcher() {
    yield takeLatest(BUY_PRODUCT, buyProductAsync)
}