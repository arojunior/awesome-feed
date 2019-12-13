import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import * as Events from './EventsComponent';
import { GITHUB } from '../constants';

const FeedComponent = ({ activity: { getFeed: { activity = [] } } }) => {
  return activity.map(card => (
    <div className="media" key={`${card.login}-${card.createdAt}`}>
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
            in
            {` `}
            <a href={(card.repository && card.repository.url) || card.url} target="_blank">
              {(card.repository && card.repository.nameWithOwner) || card.nameWithOwner}
            </a>
          </small>
        </h4>
        {Events[`${card.type}`] && Events[`${card.type}`](card)}
        <small>{moment(card.createdAt).format(`L LTS`)}</small>
      </div>
    </div>
  ));
}

FeedComponent.propTypes = {
  activity: PropTypes.shape({}).isRequired,
};

export default FeedComponent;
