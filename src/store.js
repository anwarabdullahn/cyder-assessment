import reducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);