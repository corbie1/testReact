import { call, put, all, takeLatest, select, throttle } from 'redux-saga/effects';
import {ActionType} from '../store/action-types';
import {Operation} from '../api/operations';
import {ActionCreator} from '../store/actions';

import {history} from '../history.js'

async function getUserJson(url) {
  let resp;
  try {
    let data = await fetch(url)
    resp = { data: await data.json() };
  }
  catch(e){
    resp = { err: e.message };
  }
  console.log(resp);

  return resp;
}




function* fetchUserApi(state, context){
  const username = yield select(state => state.user.login);
  try{
    const{data,err} = yield call(getUserJson, `https://api.github.com/users/${username}`);
    if(data.message != "Not Found"){
        yield put(ActionCreator.getUserAvatarSuccess(data.avatar_url))
      history.push('/terminals')
    }
    else
      yield put(ActionCreator.getUserAvatarFailure({...err.message }));
  } catch(e){
    alert("Ошибка, введите логин корректно")
    yield put(ActionCreator.getUserAvatarFailure({message: e.message }));
  }
}




export default function* sagaWatcher() {
  yield all([
    takeLatest(ActionType.GET_USER_AVATAR, fetchUserApi)
      ]);
}
