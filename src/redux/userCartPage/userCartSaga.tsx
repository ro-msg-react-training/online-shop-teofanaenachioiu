import { put, takeLatest, call } from "redux-saga/effects";
import { UpdateProductQuantityProps } from "../props";
import {
    fetchCartProductsRequest,
    fetchCartProductsError,
    fetchCartProductsSucces,
    sendOrderRequest,
    sendOrderSucces,
    sendOrderError
} from "./userCartActions";
import { 
    READ_CART_PRODUCTS, 
    SEND_ORDER, 
    UPDATE_PRODUCT_QUANTITY 
} from "./userCartTypes";
import { 
    getProductsFromUserCart, 
    sendUserOrder, 
    updateProductFromUserCart 
} from "../../service/CartService";


function* fetchCartProductList() {
    try {
        yield put(fetchCartProductsRequest())
        const products = yield call(() => getProductsFromUserCart())
        yield put(fetchCartProductsSucces(products));
    }
    catch{
        yield put(fetchCartProductsError());
    }
}

function* sendOrderAsync() {
    try {
        yield put(sendOrderRequest())
        yield call(() => sendUserOrder())
        yield put(sendOrderSucces());
    }
    catch{
        yield put(sendOrderError());
    }
}

function* updateQuantity(action: UpdateProductQuantityProps) {
    yield call(() => updateProductFromUserCart(action.payload))
}

export function* fetchCartProdictListWatcher() {
    yield takeLatest(READ_CART_PRODUCTS, fetchCartProductList)
}

export function* sendOrderWatcher() {
    yield takeLatest(SEND_ORDER, sendOrderAsync)
}

export function* updateProductQuantityWatcher() {
    yield takeLatest(UPDATE_PRODUCT_QUANTITY, updateQuantity)
}
