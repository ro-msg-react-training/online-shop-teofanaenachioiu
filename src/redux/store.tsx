import { createStore, applyMiddleware } from 'redux';
import rootReducer  from './rootReducer'
import Redux from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(Redux))

export default store