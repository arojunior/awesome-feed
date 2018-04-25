import React from 'react';
import Parser from 'html-react-parser';

export const IssueComment = card => (
  <div>
    <strong>Issue comment:</strong> [<a href={card.url} target="_blank">
      #{card.issue.number}
    </a>] {card.issue.title} {Parser(card.bodyHTML)}
  </div>
);

export const WatchEvent = () => <p>Started to watch</p>;

export const Repository = card => (
  <div>
    <strong>Starred {card.nameWithOwner}</strong>
    <br />
    {card.description}
    <br />
    [{card.languages.nodes.map(({ name }) => name).join(`, `)}] {` `}
    <strong>Stars:</strong> {card.stargazers.totalCount}
  </div>
);

export const PushEvent = card => (
  <div>
    <strong>New commits:</strong> {card.commits.map(commit => commit.message)}
  </div>
);

export const PullRequest = card => (
  <div>
    <strong>Sent a PR:</strong> [<a href={card.url} target="_blank">
      #{card.number}
    </a>] {Parser(card.bodyHTML)}
  </div>
);

export const CreateEvent = (card, repo) => (
  <div>
    <strong>Just created:</strong> [{card.ref}] {card.description}
  </div>
);
