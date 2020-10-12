import React from 'react';
import {NavLink} from 'react-router-dom';

function Header(){
    return(
        <header className = 'navbar navbar-expand-lg navbar-light bg-light'>
            <NavLink to = "/">
                <img className = 'navbar-brand' alt = 'twitter' width="30" height="30" src = 'https://www.creativefreedom.co.uk/wp-content/uploads/2017/06/Twitter-featured.png'/>
            </NavLink>
            <div className="navbar navbar-expand">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink to = "/tweets/new" className = 'nav-link'> TWEET </NavLink>
                    </li>
                
                    <li className="nav-item">
                        <NavLink to = "/users/signin/form" className = 'nav-link'> Connexion </NavLink>
                    </li>
                    
                    <li className="nav-item">
                        <NavLink to = "/auth/signout" className = 'nav-link'> Deconnexion </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;