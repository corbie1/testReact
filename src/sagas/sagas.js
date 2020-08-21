import { call, put, all, takeLatest, select, throttle } from 'redux-saga/effects';
import {ActionType} from '../store/action-types';
import {Operation} from '../api/operations';
import {ActionCreator} from '../store/actions';


function* getUserSaga(state) {
  const username = yield select(state => state.User.login);

  try {
    const data = yield call(() => {
      return fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
    });
    yield put(ActionCreator.getUserAvatarSuccess(data.avatar_url));
  } catch (error) {
    yield put(ActionCreator.getUserAvatarFailure());
  }
}

export default function* sagaWatcher() {
  yield all([
    takeLatest(ActionType.GET_USER_AVATAR, getUserSaga)
      ]);
}
