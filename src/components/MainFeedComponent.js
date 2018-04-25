import React from 'react';
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

export default MainFeed;
