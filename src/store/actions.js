import {ActionType} from './action-types';

// Передача данных в стор 
export const ActionCreator = {
    getLogin: (login) =>({
        type: ActionType.GET_LOGIN,
        payload: login,
      }),
    getUser: (user) =>({
        type: ActionType.GET_USER,
        payload: user,
      }),
    getUserError: () =>({
      type: 'GET_USER_ERROR'
    }),
    getUserSuccess: (data) =>({
      type: 'GET_USER_SUCCESS',
      payload: data.avatar_url
    }),
    fetchUser: () =>({
      type: 'FETCHED_USER'
    })
};
