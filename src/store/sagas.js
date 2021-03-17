import { takeEvery } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, fetchUser)
}

export default mySaga;