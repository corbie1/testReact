import {ActionType} from './action-types';

// Передача данных в стор 
export const ActionCreator = {
    setLogin: (login) =>({
      type: ActionType.SET_LOGIN,
      payload: login,
    }),
    getUserAvatar: (user) =>({
      type: ActionType.GET_USER_AVATAR,
      payload: user,
    }),
    getUserAvatarFailure: () =>({
      type: 'GET_USER_AVATAR_FAILURE'
    }),
    getUserAvatarSuccess: (avatar_url) =>({
      type: 'GET_USER_AVATAR_SUCCESS',
      payload: avatar_url
    }),
};
