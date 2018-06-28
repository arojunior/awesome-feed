import React from 'react';
import GithubLogo from 'assets/img/GitHub-Logo-Web-Development-Community.png';

const RightSide = () => (
  <div>
    <div className="panel panel-default panel-custom">
      <div className="panel-heading">
        <h3 className="panel-title">
          Who to follow
          <small>
            <a href="">Refresh</a> ●
            <a href="">View all</a>
          </small>
        </h3>
      </div>
      <div className="panel-body">
        <div className="media">
          <div className="media-left">
            <img src="http://placehold.it/32x32" alt="" className="media-object img-rounded" />
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
            <img src="http://placehold.it/32x32" alt="" className="media-object img-rounded" />
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
            <img src="http://placehold.it/32x32" alt="" className="media-object img-rounded" />
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
    <div className="row">
      <div className="col-md-5 col-md-offset-1">
        <a
          href="http://js.org"
          target="_blank"
          rel="noopener noreferrer"
          title="JS.ORG | JavaScript Community"
        >
          <img src="http://logo.js.org/dark_horz.png" width="80" alt="JS.ORG Logo" />
        </a>
      </div>
      <div className="col-md-5">
        <a
          href="https://github.com/arojunior/awesome-feed"
          target="_blank"
          rel="noopener noreferrer"
          title="Contribute | Fork it on Github"
        >
          <img src={GithubLogo} width="120" alt="Github" />
        </a>
      </div>
    </div>
  </div>
);

export default RightSide;
