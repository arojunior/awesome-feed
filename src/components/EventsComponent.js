import React from 'react';
import Parser from 'html-react-parser';

export const IssueComment = card => (
  <div>
    <strong>Issue comment:</strong> [
    <a href={card.url} target="_blank">
      #{card.issue.number}
    </a>
    ]{card.issue.title} {Parser(card.bodyHTML)}
  </div>
);

export const WatchEvent = () => <p>Started to watch</p>;

export const Repository = card => (
  <div>
    <strong>Starred:</strong> <span className="glyphicon glyphicon-star" />
    {card.stargazers.totalCount}
    <br />
    {card.description}
    <br />
    <small>
      {card.languages.length && `[${card.languages.map(({ name }) => name).join(`, `)}]`}
    </small>
  </div>
);

export const PushEvent = card => (
  <div>
    <strong>New commit comment: </strong>[<a href={card.url} target="_blank">
      #
    </a>] {Parser(card.bodyHTML)}
  </div>
);

export const PullRequest = card => (
  <div>
    <strong>Sent a PR:</strong> {card.title} [
    <a href={card.url} target="_blank">
      #{card.number}
    </a>
    ]{Parser(card.bodyHTML)}
  </div>
);

export const CreateEvent = card => (
  <div>
    <strong>Just created:</strong> [{card.ref}]{card.description}
  </div>
);
