import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = ({ handleLogout }) => (
  <div className="navbar navbar-default navbar-fixed-top af-navbar">
    <div className="container-fluid">
      <div id="navbar" className="navbar af-navbar-mobile" aria-expanded="true">
        <ul className="nav navbar-nav af-navbar--nav">
          <li className="active">
            <a href="/">
              <span className="glyphicon glyphicon-home" /> Home
            </a>
          </li>
          <li>
            <NavLink to="repositories">
              <span className="glyphicon glyphicon-bell" /> Repositories
            </NavLink>
          </li>
          <li>
            <NavLink to="developers">
              <span className="glyphicon glyphicon-user" /> Developers
            </NavLink>
          </li>
          <li>
            <a href="" onClick={handleLogout}>
              <span className="glyphicon glyphicon-log-out" /> Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

Header.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default Header;
