import Namespace from './reducers/name-space';
import {createSelector} from 'reselect';

// Поиск фильмов
export const findUserSelector = createSelector(
    (state) => state.User,
    (User) => (login) => {
        var empty = [];
            if(login != ""){
                return fetch(`https://api.github.com/users/${User.login}`)
                .then(response => response.json())
                .then(response => {
                console.log(response);
                return response;
                })
            }
            return empty;
    }
);
