import React from "react";
import logo from '../style/images/logo.png'
import {useHistory} from "react-router-dom";

function Header(){
    const history=useHistory();
    const goTo=()=>{
        history.push('/')
    }
    return(
        <header className='header'>
            <img className='header-logo' onClick={goTo}  src={logo} alt='header-logo'/>
            <ul className='header-nav'>
                <li className='header-nav__component'>Address Book</li>
                <li className='header-nav__component' onClick={goTo}>
                    Leave Requests
                    <div className="header-nav__component-underline"></div>
                </li>

            </ul>
            <ul className='header-system'>
                <button className='header-system__component'></button>
                <div className='header-system__component header-system-avatar'>
                    <div className='header-system-avatar__profile'></div>
                    <p className='header-system-avatar__name'>ANNA SMITH</p>
                </div>
                <button className='header-system__component'></button>

            </ul>
        </header>
    )
}

export default Header;