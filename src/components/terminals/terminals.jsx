import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

function Terminals(){
    const avatar = useSelector((state) => state.User.avatar);

    return(
        <div>
            <img src={avatar}></img>
        </div>
    )   
}
export default Terminals;