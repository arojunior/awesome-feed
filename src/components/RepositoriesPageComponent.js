import React from 'react';
import PropTypes from 'prop-types';

const RepositoriesPageComponent = ({ repos }) => (
  <div className="panel panel-info">
    <div className="panel-body">
      {repos.map(({ author, name, url, description, language, stars }) => (
        <div className="media" key={url}>
          <div className="media-body">
            <h4 className="media-heading">
              <a href={url} target="_blank">
                {author} / {name}
              </a>
              {` `}
              <small>
                <span className="glyphicon glyphicon-star" />
                {stars}
              </small>
            </h4>
            <p>{description}</p>
            {language && <small>[{language}]</small>}
          </div>
        </div>
      ))}
    </div>
  </div>
);

RepositoriesPageComponent.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default RepositoriesPageComponent;
