import React from 'react';
import PropTypes from 'prop-types';

const DevelopersPageComponent = ({ users }) => (
  <div className="panel panel-info">
    <div className="panel-body">
      {users.map(({ username, name, url, avatar, repo }) => (
        <div className="media" key={url}>
          <div className="media-left">
            <a href={url} target="_blank">
              <img src={avatar} alt={name} className="media-object img-rounded" height="50" />
            </a>
          </div>
          <div className="media-body">
            <h4 className="media-heading">
              <a href={url} target="_blank">
                {username}
              </a>
              {` `}
              /{` `}
              <a href={repo.url} target="_blank">
                {repo.name}
              </a>
            </h4>
            {repo.description}
          </div>
        </div>
      ))}
    </div>
  </div>
);

DevelopersPageComponent.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default DevelopersPageComponent;
