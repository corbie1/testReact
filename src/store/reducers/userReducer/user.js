import {ActionType} from '../../action-types';

// Дефолтное состояние
const initialState = {
};
// Редьюсер изначально принимает в стор дефолтное состояние(выше), а после выполнения экшена возвращает данные
export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case ActionType.SET_LOGIN:
        return {
          ...state,
          login: action.payload
        }
      case ActionType.GET_USER_AVATAR_SUCCESS:
        return{
          ...state,
          avatar: action.payload
        }
    default: return state;
  }
}
