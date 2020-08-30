import { takeEvery, call, put, select } from 'redux-saga/effects';
import { REQUEST_USER_LIST } from './constants';
import request from '../../utils/request';
import { userListFetched } from './actions';

function* fetchUsers() {
  console.log('fetchUsers in saga');
  const response = yield call(
    request,
    'https://jsonplaceholder.typicode.com/users',
  );
  yield put(userListFetched(response));
}
// Individual exports for testing
export default function* userSaga() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(REQUEST_USER_LIST, fetchUsers);
}
