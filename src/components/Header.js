import React from 'react';
import {NavLink} from 'react-router-dom';

function Header(){
    return(
        <header className = 'navbar navbar-expand-lg navbar-light bg-light'>
            <img className = 'navbar-brand' alt = 'twitter' width="30" height="30" src = 'https://www.creativefreedom.co.uk/wp-content/uploads/2017/06/Twitter-featured.png'/>
            <div className="navbar navbar-expand">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink to = "/" className = 'nav-link'> Home </NavLink>
                    </li>
                
                    <li className="nav-item">
                        <NavLink to = "/favoris" className = 'nav-link'> Favoris </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;