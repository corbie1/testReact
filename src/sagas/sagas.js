import { call, put, all, takeLatest, select, throttle } from 'redux-saga/effects';
import {ActionType} from '../store/action-types';
import {Operation} from '../api/operations';
import {ActionCreator} from '../store/actions';
import {findUserSelector} from '../store/selectors'

function* setFindUserSaga(action) {
  const searchUser = yield select((state) => findUserSelector(state)(action.payload));
  yield put(ActionCreator.getUser(searchUser));
}

export default function* sagaWatcher() {
  yield all([
    throttle(1000, ActionType.GET_USER, setFindUserSaga)
      ]);
}
