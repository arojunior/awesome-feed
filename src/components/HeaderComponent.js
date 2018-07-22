import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = ({ handleLogout }) => (
  <div className="navbar navbar-default navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="pull-left navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          style={{ marginLeft: 10 }}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>

      <div id="navbar" className="navbar-collapse collapse" aria-expanded="true">
        <ul className="nav navbar-nav">
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
