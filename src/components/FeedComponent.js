import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import { transformDataForFeed } from 'services/feedActions';
import * as Events from './EventsComponent';
import { GITHUB } from '../constants';

const renderItems = (card, index) => (
  <div className="media" key={`${card.login}-${index}`}>
    <a className="media-left" href={`${GITHUB}/${card.login}`} target="_blank">
      <img
        alt={card.login}
        className="media-object img-rounded"
        height="40px"
        src={card.avatarUrl}
      />
    </a>
    <div className="media-body">
      <h4 className="media-heading">
        {card.name}
        {` `}
        <small>
          in{` `}
          <a href={(card.repository && card.repository.url) || card.url} target="_blank">
            {(card.repository && card.repository.nameWithOwner) || card.nameWithOwner}
          </a>
        </small>
      </h4>
      {Events[`${card.__typename}`] && Events[`${card.__typename}`](card)}
      <small>{moment(card.createdAt).format(`L LTS`)}</small>
    </div>
  </div>
);

const FeedComponent = ({ activity }) => {
  const transformedList = transformDataForFeed(activity) || [];
  return <div>{transformedList.map(renderItems)}</div>;
};

FeedComponent.propTypes = {
  activity: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default FeedComponent;
