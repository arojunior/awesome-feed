import React from 'react'
import { sort, descend, prop } from 'ramda'
import { List } from 'react-virtualized'
import {
  IssueComment,
  WatchEvent,
  PushEvent,
  PullRequest,
  Create
} from './events'
import { GITHUB } from '../../../constants'

const cardByEvent = (type, payload, repo) => {
  switch (type) {
    case 'IssueCommentEvent':
      return IssueComment(payload, repo)
    case 'WatchEvent':
      return WatchEvent()
    case 'PushEvent':
      return PushEvent(payload, repo)
    case 'PullRequestEvent':
      return PullRequest(payload, repo)
    case 'CreateEvent':
      return Create(payload, repo)
    default:
      return null
  }
}

const MiddleBody = ({ activity }) => {
  const sortedByLast = sort(descend(prop('created_at')))(activity)

  const rowRenderer = ({ key, index, isScrolling, isVisible, style }) => {
    const card = sortedByLast[index]

    return card ? (
      <div className="media" key={key}>
        <a
          className="media-left"
          href={`${GITHUB}/${card.actor.login}`}
          target="_blank"
        >
          <img
            alt=""
            className="media-object img-rounded"
            height="40px"
            src={card.actor.avatar_url}
          />
        </a>
        <div className="media-body">
          <h4 className="media-heading">
            {card.actor.display_login}{' '}
            <small>
              in{' '}
              <a href={`${GITHUB}/${card.repo.name}`} target="_blank">
                {card.repo.name}
              </a>
            </small>
          </h4>

          {cardByEvent(card.type, card.payload, card.repo)}
          <small>{card.created_at}</small>
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
      rowCount={sortedByLast.length}
      rowRenderer={rowRenderer}
    />
  )
}

export default MiddleBody
