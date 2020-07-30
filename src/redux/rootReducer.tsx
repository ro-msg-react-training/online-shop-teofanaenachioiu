import { combineReducers } from 'redux'
import productListPageReducer from './productListPage/productListReducer'
import productDetailsPageReducer from './productDetailsPage/productDetailsReducer'
import userCartPageReducer from './userCartPage/userCartReducer'
import userEditPageReducer from './productEditPage/productEditReducer'


const rootReducer = combineReducers({
    products: productListPageReducer,
    product: productDetailsPageReducer,
    userCart: userCartPageReducer,
    editProduct: userEditPageReducer
})

export default rootReducer