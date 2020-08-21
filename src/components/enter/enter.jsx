import React, { useState }  from 'react';
import {ActionCreator} from "../../store/actions"
import {useSelector, useDispatch} from 'react-redux';




function Enter(props){
    const dispatch = useDispatch();
    return (
        <div>
            <input  onChange={e => dispatch(ActionCreator.setLogin(e.target.value))} type='text' placeholder='username on github'/>
            <button onClick={() => dispatch(ActionCreator.getUserAvatar())}>Войти</button>

        </div>
    );
}


export default Enter;