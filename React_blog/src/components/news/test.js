import React from 'react';

export const GitRepo = ({ repo }) => (
  <div className="repo">
    <h3 className="repo__title">
      <a href={repo.html_url}>{repo.name}</a>
    </h3>
    <p className="repo__description">{repo.description}</p>
    <p className="author">{repo.description}</p>
  </div>
);
