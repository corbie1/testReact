import React, { useState }  from 'react';
import {ActionCreator} from "../../store/actions"
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";






function TerminalList(){
    const terminals = useSelector((state) => state.terminal.list);
    return(
        <div>
            <button>Удалить</button>

            {terminals.map(item=>(
                <div className="terminal__item" key={item.id}>
                    <input type="checkbox"/>
                    <div>{item.id}</div>
                    <div>{item.name}</div>
                    <div>{item.description}</div>
                </div>
            ))}
        </div>
    )

}

export default TerminalList;
