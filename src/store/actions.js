import {ActionType} from './action-types';

// Передача данных в стор 
export const ActionCreator = {
    getLogin: (searchQuery) =>({
        type: ActionType.GET_LOGIN,
        payload: searchQuery,
      }),
    getUser: (getUser) =>({
        type: ActionType.GET_USER,
        payload: getUser,
      })
};
