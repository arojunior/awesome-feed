import React from 'react';
import * as Events from './EventsComponent';
import { GITHUB } from '../../../constants';
import { transformDataForFeed } from 'routes/Home/services/feedActions';

const renderItems = (card, index) => <div className="media" key={`${card.login}-${index}`}>
  <a
    className="media-left"
    href={`${GITHUB}/${card.login}`}
    target="_blank"
  >
    <img
      alt={card.login}
      className="media-object img-rounded"
      height="40px"
      src={card.avatarUrl}
    />
  </a>
  <div className="media-body">
    <h4 className="media-heading">
      {card.name}{' '}
      <small>
        in{' '}
        <a href={(card.repository && card.repository.url) || card.url} target="_blank">
          {(card.repository && card.repository.nameWithOwner) ||
            card.nameWithOwner}
        </a>
      </small>
    </h4>
    {Events[`${card.__typename}`] && Events[`${card.__typename}`](card)}
    <small>{card.createdAt}</small>
  </div>
</div>

const FeedComponent = ({ activity }) => {
  const transformedList = transformDataForFeed(activity);
  return (
    <div>
      {transformedList.map(renderItems)}
    </div>
  )
};

export default FeedComponent;
