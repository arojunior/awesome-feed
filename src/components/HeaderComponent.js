import React from 'react';

const Header = ({ handleLogout }) => (
  <div className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      <div
        className="navbar-collapse navbar-collapse-1 collapse"
        aria-expanded="true"
      >
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="/">
              <span className="glyphicon glyphicon-home" /> Home
            </a>
          </li>
          <li>
            <a href="">
              <span className="glyphicon glyphicon-bell" /> Repositories
            </a>
          </li>
          <li>
            <a href="">
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

export default Header;
