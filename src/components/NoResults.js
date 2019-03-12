import React from 'react';

const NoResults = () => (
  <div className="photo-container not-found">
    <ul>
      <li className="not-found">
        <h3>No Photos Found</h3>
        <p>You search did not return any photos.</p>
      </li>
    </ul>
  </div>
);

export default NoResults;
