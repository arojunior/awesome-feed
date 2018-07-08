import React from 'react';
import PropTypes from 'prop-types';

const renderTrendingRepositories = repos =>
  repos.slice(0, 10).map(({ author, name, url }) => (
    <li key={url}>
      <a href={url} target="_blank">
        {author} / {name}
      </a>
    </li>
  ));

const TrendingReposComponent = ({ repos }) => (
  <div className="panel panel-default panel-custom">
    <div className="panel-heading">
      <h3 className="panel-title">
        Trends <small>repositories</small>
      </h3>
    </div>

    <div className="panel-body">
      <ul className="list-unstyled">{renderTrendingRepositories(repos)}</ul>
    </div>
  </div>
);

TrendingReposComponent.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default TrendingReposComponent;
