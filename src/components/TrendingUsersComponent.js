import React from 'react';
import PropTypes from 'prop-types';
import GithubLogo from 'assets/img/GitHub-Logo-Web-Development-Community.png';

const renderTrendingUsers = users =>
  users.slice(0, 5).map(({ name, username, url, avatar }) => (
    <div className="media" key={url}>
      <div className="media-left">
        <a href={url} target="_blank">
          <img src={avatar} alt={name} className="media-object img-rounded" height="50" />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">
          {username} ({name})
        </h4>
        <a href={url} className="btn btn-default btn-xs" target="_blank">
          {` `}+ <span className="glyphicon glyphicon-user" /> Follow
          {` `}
        </a>
      </div>
    </div>
  ));

const TrendingUsersComponent = ({ users }) => (
  <div>
    <div className="panel panel-default panel-custom">
      <div className="panel-heading">
        <h3 className="panel-title">
          Who to follow <small>Trending developers</small>
        </h3>
      </div>
      <div className="panel-body">{renderTrendingUsers(users)}</div>
      <div className="panel-footer">
        <a href="/">
          <span className="glyphicon glyphicon-user" /> Find people you know
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

TrendingUsersComponent.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default TrendingUsersComponent;
