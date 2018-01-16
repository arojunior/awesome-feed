import React from 'react';
import FeedComponent from './FeedComponent';

const MainFeed = ({ activity }) => (
  <div className="col-sm-6">
    <div className="panel panel-info">
      <div className="panel-body" style={{ height: `calc(100vh - 120px)` }}>
        <FeedComponent activity={activity} />
      </div>
    </div>
  </div>
);

export default MainFeed;
