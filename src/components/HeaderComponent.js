import React from 'react';
import PropTypes from 'prop-types';
import history from '../history';

const Header = ({ handleLogout }) => (
  <div className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      <div className="navbar-collapse navbar-collapse-1 collapse" aria-expanded="true">
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="/">
              <span className="glyphicon glyphicon-home" /> Home
            </a>
          </li>
          <li>
            <a href="" onClick={() => history.push(`repositories`)}>
              <span className="glyphicon glyphicon-bell" /> Repositories
            </a>
          </li>
          <li>
            <a href="" onClick={() => history.push(`developers`)}>
              <span className="glyphicon glyphicon-user" /> Developers
            </a>
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
