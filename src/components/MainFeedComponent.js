import React from 'react';
import PropTypes from 'prop-types';
import FeedComponent from './FeedComponent';

const MainFeed = ({ activity }) => (
  <div>
    <div className="panel panel-info">
      <div className="panel-body">
        <FeedComponent activity={activity} />
      </div>
    </div>
  </div>
);

MainFeed.propTypes = {
  activity: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default MainFeed;
