import React from 'react'

const Header = ({ handleChange, setUser, username }) => (
  <div className="navbar navbar-default navbar-static-top">
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
        </ul>
        <div className="navbar-form navbar-right">
          <div className="form-group has-feedback">
            <form onSubmit={setUser}>
              Github login: {' '}
              <input
                type="text"
                className="form-control-nav"
                value={username}
                onChange={e => handleChange(e.target.value)}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Header
