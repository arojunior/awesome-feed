import React from 'react';
import { List, AutoSizer } from 'react-virtualized';
import * as Events from './EventsComponent';
import { GITHUB } from '../../../constants';
import { transformDataForFeed } from 'routes/Home/services/feedActions';

/*
const cardByEvent = (type, card) => {
  switch (type) {
    case 'IssueComment':
      return IssueComment(card);
    case 'WatchEvent':
      return WatchEvent();
    case 'PushEvent':
      return PushEvent(card);
    case 'PullRequestEvent':
      return PullRequest(card);
    case 'CreateEvent':
      return Create(card);
    default:
      return null;
  }
};*/

const MiddleBody = ({ activity }) => {
  const transformedList = transformDataForFeed(activity);
  const rowRenderer = ({ key, index, isScrolling, isVisible, style }) => {
    const card = transformedList[index];

    return card ? (
      <div className="media" key={key}>
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
              <a href="" target="_blank">
                {(card.repository && card.repository.name) ||
                  card.nameWithOwner}
              </a>
            </small>
          </h4>
          {Events[`${card.__typename}`] && Events[`${card.__typename}`](card)}
          <small>{card.createdAt}</small>
        </div>
      </div>
    ) : null;
  };

  return (
    <AutoSizer disableHeight>
      {({ width }) => (
        <List
          width={width}
          height={600}
          rowHeight={90}
          rowCount={transformedList.length}
          rowRenderer={rowRenderer}
        />
      )}
    </AutoSizer>
  )
};

export default MiddleBody;
