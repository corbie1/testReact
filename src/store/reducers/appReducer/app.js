import {ActionType} from '../../action-types';

// Дефолтное состояние
const initialState = {
    error: '',

};
// Редьюсер изначально принимает в стор дефолтное состояние(выше), а после выполнения экшена возвращает данные
export default function appReducer(state = initialState, action) {
    switch (action.type) {
      
    default: return state;
  }
}
