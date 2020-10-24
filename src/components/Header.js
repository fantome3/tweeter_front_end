import React from "react";
import { connect, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../store/actions/action.auth";

function Header({ logout }) {
  //on recupère l'état du state du store
  const { isLoggedIn: authentificated } = useSelector(
    (state) => state.authentication
  );

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink to="/">
        <img
          className="navbar-brand"
          alt="twitter"
          width="30"
          height="30"
          src="https://www.creativefreedom.co.uk/wp-content/uploads/2017/06/Twitter-featured.png"
        />
      </NavLink>
      <div className="navbar navbar-expand">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink to="/tweets/new" className="nav-link">
              {" "}
              TWEET{" "}
            </NavLink>
          </li>

          {authentificated ? (
            <li className="nav-item">
              <NavLink
                to="/users/signin/form"
                onClick={logout}
                className="nav-link"
              >
                Deconnexion
              </NavLink>
            </li>
          ) : (
            <li className="nav-item">
              <NavLink to="/users/signin/form" className="nav-link">
                Connexion
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}

export default connect(
  (state) => {
    const { isLoggedIn } = state.authentication;
    return {
      isLoggedIn,
    };
  },
  { logout }
)(Header);
