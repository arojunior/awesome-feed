import React from 'react'
import { List } from 'react-virtualized'

import {
  IssueComment,
  WatchEvent,
  PushEvent,
  PullRequest,
  Create
} from './events'
import { GITHUB } from '../../../constants'
import { transformDataForFeed } from 'routes/Home/services/feedActions'

const cardByEvent = (type, card) => {
  switch (type) {
    case 'IssueComment':
      return IssueComment(card)
    case 'WatchEvent':
      return WatchEvent()
    case 'PushEvent':
      return PushEvent(card)
    case 'PullRequestEvent':
      return PullRequest(card)
    case 'CreateEvent':
      return Create(card)
    default:
      return null
  }
}

const MiddleBody = ({ activity }) => {
  const transformedList = transformDataForFeed(activity)
  console.log(transformedList)
  const rowRenderer = ({ key, index, isScrolling, isVisible, style }) => {
    const card = transformedList[index]

    return card ? (
      <div className="media" key={key}>
        <a
          className="media-left"
          href={`${GITHUB}/${card.login}`}
          target="_blank"
        >
          <img
            alt=""
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
          {cardByEvent(card.__typename, card)}
          <small>{card.createdAt}</small>
          <ul className="nav nav-pills nav-pills-custom">
            <li>
              <a href="">
                <span className="glyphicon glyphicon-share-alt" />
              </a>
            </li>
            <li>
              <a href="">
                <span className="glyphicon glyphicon-retweet" />
              </a>
            </li>
            <li>
              <a href="">
                <span className="glyphicon glyphicon-star" />
              </a>
            </li>
            <li>
              <a href="">
                <span className="glyphicon glyphicon-option-horizontal" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    ) : null
  }

  return (
    <List
      width={530}
      height={535}
      rowHeight={20}
      rowCount={transformedList.length}
      rowRenderer={rowRenderer}
    />
  )
}

export default MiddleBody
