
import {combineReducers} from 'redux';

import appReducer from './appReducer/app';
import userReducer from './userReducer/user';

import NameSpace from './name-space';

export default combineReducers({
  [NameSpace.APP]: appReducer,
  [NameSpace.USER]: userReducer,
});
