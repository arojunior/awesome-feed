import React from 'react';
import PropTypes from 'prop-types';
import FeedComponent from './FeedComponent';

const MainFeed = ({ activity, loadOlderMessages }) => (
  <div>
    <div className="panel panel-info">
      <div className="panel-body">
        <div className="pull-right">
          <button type="button" className="btn btn-default" onClick={loadOlderMessages}>
            Load more
          </button>
        </div>
        <FeedComponent activity={activity} />
      </div>
    </div>
  </div>
);

MainFeed.propTypes = {
  activity: PropTypes.shape({}).isRequired,
  loadOlderMessages: PropTypes.func.isRequired,
};

export default MainFeed;
