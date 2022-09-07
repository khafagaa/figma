import {createStore, applyMiddleware} from 'redux';
import CreateSagaMiddleWare from 'redux-saga';
import reducers from '../reducer/index';
import mySaga from '../saga/index';

const sagaMiddleware = CreateSagaMiddleWare();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(mySaga);

export {store};
