import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div
            className="navbar-collapse navbar-collapse-1 collapse"
            aria-expanded="true"
          >
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="">
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
                <input
                  type="text"
                  className="form-control-nav"
                  id="search"
                  aria-describedby="search1"
                />
                <span
                  className="glyphicon glyphicon-search form-control-feedback"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
