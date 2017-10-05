import React, { Component } from 'react'

export default class LeftSide extends Component {
  render() {
    return (
      <div className="col-sm-3">
        <div className="panel panel-default">
          <div className="panel-body">
            <a href="">
              <img
                className="img-responsive"
                alt=""
                src="http://placehold.it/800x500"
              />
            </a>
            <div className="row">
              <div className="col-xs-3">
                <h5>
                  <small>STARRED</small> <br />
                  <a href="">1,545</a>
                </h5>
              </div>
              <div className="col-xs-4">
                <h5>
                  <small>FOLLOWING</small> <br />
                  <a href="">251</a>
                </h5>
              </div>
              <div className="col-xs-5">
                <h5>
                  <small>FOLLOWERS</small> <br />
                  <a href="">153</a>
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="panel panel-default panel-custom">
          <div className="panel-heading">
            <h3 className="panel-title">
              Trends
              <small>
                <a href="">repos</a>
              </small>
            </h3>
          </div>

          <div className="panel-body">
            <ul className="list-unstyled">
              <li>
                <a href="">apple / darwin-xnu</a>
              </li>
              <li>
                <a href="">Shopify / draggable</a>
              </li>
              <li>
                <a href="">mbeaudru / modern-js-cheatsheet</a>
              </li>
              <li>
                <a href="">hmemcpy / milewski-ctfp-pdf</a>
              </li>
              <li>
                <a href="">yangshun / tech-interview-handbook</a>
              </li>
              <li>
                <a href="">lllyasviel / style2paints</a>
              </li>
              <li>
                <a href="">LisaDziuba / Marketing-for-Engineers</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
