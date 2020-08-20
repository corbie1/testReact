import React, { useState }  from 'react';
import {ActionCreator} from "../../store/actions"
import {useSelector, useDispatch} from 'react-redux';



export const getUser = (username) =>{
  
}



function Enter(props){
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    return (
        <div>
            <input  onChange={e => dispatch(ActionCreator.getLogin(e.target.value))} type='text' placeholder='username on github'/>
            <button onClick={e => dispatch(ActionCreator.getUser(user))}>Войти</button>
        </div>
    );
}


export default Enter;