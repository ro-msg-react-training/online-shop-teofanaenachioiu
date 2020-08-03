import { getAll } from "../../service/ProductService";
import { put, takeLatest, call } from "redux-saga/effects";
import { READ_PRODUCTS } from "./productListTypes";
import { fetchProductsSucces, fetchProductsRequest, fetchProductsError } from "./productListActions";


function* fetchProductListAsync() {
    try {
        yield put(fetchProductsRequest())
        const response = yield call(() => getAll())
        yield put(fetchProductsSucces(response.data));
    }
    catch{
        yield put(fetchProductsError());
    }
}

export function* fetchProdictListWatcher() {
    yield takeLatest(READ_PRODUCTS, fetchProductListAsync)
}