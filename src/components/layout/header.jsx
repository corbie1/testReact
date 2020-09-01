import React from 'react';
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';

function Header (props){
    const avatar = useSelector((state) => state.user.avatar);    
    return(
        <header className = "header__app header block__inner"> 
            <ul className = "header__menu">
                <li className = "menu__item"><Link to="/buyers">Клиенты</Link></li>
                <li className = "menu__item"><Link to="/terminals">Терминалы</Link></li>
            </ul>
            <img className="header__avatar" src={avatar}></img>
        </header>   
    )
}



export default Header;