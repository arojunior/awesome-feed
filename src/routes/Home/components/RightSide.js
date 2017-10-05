import React, { Component } from 'react'

export default class RightSide extends Component {
  render() {
    return (
      <div className="col-sm-3">
        <div className="panel panel-default panel-custom">
          <div className="panel-heading">
            <h3 className="panel-title">
              Who to follow
              <small>
                <a href="">Refresh</a> ● <a href="">View all</a>
              </small>
            </h3>
          </div>
          <div className="panel-body">
            <div className="media">
              <div className="media-left">
                <img
                  src="http://placehold.it/32x32"
                  alt=""
                  className="media-object img-rounded"
                />
              </div>
              <div className="media-body">
                <h4 className="media-heading">apple (Apple)</h4>
                <a href="" className="btn btn-default btn-xs">
                  +
                  <span className="glyphicon glyphicon-user" />
                  Follow
                </a>
              </div>
            </div>
            <div className="media">
              <div className="media-left">
                <img
                  src="http://placehold.it/32x32"
                  alt=""
                  className="media-object img-rounded"
                />
              </div>
              <div className="media-body">
                <h4 className="media-heading">Shopify (Shopify)</h4>
                <a href="" className="btn btn-default btn-xs">
                  +
                  <span className="glyphicon glyphicon-user" />
                  Follow
                </a>
              </div>
            </div>
            <div className="media">
              <div className="media-left">
                <img
                  src="http://placehold.it/32x32"
                  alt=""
                  className="media-object img-rounded"
                />
              </div>
              <div className="media-body">
                <h4 className="media-heading">mbeaudru (BEAUDRU Manuel)</h4>
                <a href="" className="btn btn-default btn-xs">
                  +
                  <span className="glyphicon glyphicon-user" />
                  Follow
                </a>
              </div>
            </div>
          </div>
          <div className="panel-footer">
            <a href="www.google.it">
              <span className="glyphicon glyphicon-user" />
              Find people you know
            </a>
          </div>
        </div>
      </div>
    )
  }
}
