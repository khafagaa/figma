import {takeLatest, all} from 'redux-saga/effects';
import sagaAction from './saga.action';
import {getShop ,getDetails} from './sagas/data.saga';

export default function* root() {
  yield all([takeLatest(sagaAction.GET_SHOP_DATA, getShop)]);
  yield all([takeLatest(sagaAction.GET_DATA, getDetails)]);
}
