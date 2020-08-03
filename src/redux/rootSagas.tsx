import { all }  from 'redux-saga/effects';
import { fetchProdictListWatcher as fetchProductListWatcher } from './productListPage/productListSaga';
import { 
    fetchProdictDetailsWatcher, 
    deleteProductWatcher, 
    buyProductWatcher
} from './productDetailsPage/productDetailsSaga';
import { 
    fetchCartProdictListWatcher, 
    sendOrderWatcher, 
    updateProductQuantityWatcher
} from './userCartPage/userCartSaga';
import { fetchProductFormWatcher, editProductWatcher, addProductWatcher, clearDataWatcher, updateFormErrorsWatcher, localEditProductWatcher } from './productEditPage/productEditSaga';


export default function* rootSaga() {
    yield all([
        fetchProductListWatcher(),
        fetchProdictDetailsWatcher(),
        deleteProductWatcher(),
        buyProductWatcher(),
        fetchCartProdictListWatcher(),
        sendOrderWatcher(),
        updateProductQuantityWatcher(),
        fetchProductFormWatcher(),
        editProductWatcher(),
        addProductWatcher(),
        clearDataWatcher(),
        updateFormErrorsWatcher(),
        localEditProductWatcher(),
    ]);
 }