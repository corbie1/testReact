import React from 'react';
import {Link} from "react-router-dom";

function Header (props){
    return(
        <header className = "header__app header block__inner"> 
            <ul className = "header__menu">
                <li className = "menu__item"><Link to="/Enter">Вход</Link></li>
                <li className = "menu__item"><Link to="/Buyers">Терминалы</Link></li>
                <li className = "menu__item"><Link to="/Terminals">Клиенты</Link></li>
            </ul>
        </header>   
    )
}



export default Header;