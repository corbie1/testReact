import {ActionType} from '../../action-types';

// Дефолтное состояние
const initialState = {
  list:[]
};
// Редьюсер изначально принимает в стор дефолтное состояние(выше), а после выполнения экшена возвращает данные
export default function appReducer(state = initialState, action) {
    switch (action.type) {
      case ActionType.SET_TERMINAL:
        return {
          ...state,
          list: [...state.list, action.payload] 
        }
    default: return state;
  }
}
