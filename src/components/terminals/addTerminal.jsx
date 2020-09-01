import React, { useState }  from 'react';
import {ActionCreator} from "../../store/actions"
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";
import TerminalList from './terminalList.jsx';





function AddTerminal(){
    const dispatch = useDispatch();
    let name, description, number = 0;
    return(
        <form className="b-form" 
        onSubmit={e => {
            e.preventDefault();
            var terminal = {
                id: number++,
                name: name.value,
                description: description.value
            }
            dispatch(ActionCreator.setTerminal(terminal));
            name.value = '';
            description.value = '';
          }}
          >
            <div>
                <label >Название терминала</label>
                <input type="text" ref={node => (name = node)}></input>
            </div>
            <div>
                <label>Описание</label>
                <input type="text" ref={node => (description = node)}></input>
            </div>
            <button>Добавить</button>
            <TerminalList></TerminalList>

        </form>
        

    )   
}
export default AddTerminal;