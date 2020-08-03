import { createStore, applyMiddleware } from 'redux';
import rootReducer  from './rootReducer'
import Redux from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSagas';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, Redux))

sagaMiddleware.run(rootSaga);

export default store