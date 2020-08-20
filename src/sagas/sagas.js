import { call, put, all, takeLatest, select, throttle } from 'redux-saga/effects';
import {ActionType} from '../store/action-types';
import {Operation} from '../api/operations';
import {ActionCreator} from '../store/actions';


function* setFindUserSaga(state) {
  const username = state.payload.login;
  try {
    const data = yield call(() => {
      return fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
    });
    yield put(ActionCreator.getUser(data.avatar_url));
  } catch (error) {
    yield put(ActionCreator.getUserError());
  }
}


// function* setFindUserSaga(state) {
//   const username = state.payload.login;

//   if(username != ""){
//     return fetch(`https://api.github.com/users/${username}`)
//     .then(response => response.json())
//     .then(response => {
//     return response;
//     })       
// }

// }

export default function* sagaWatcher() {
  yield all([
    takeLatest(ActionType.GET_USER, setFindUserSaga)
      ]);
}
