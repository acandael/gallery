import React from 'react';
import Picture from './Picture';
import NoResults from './NoResults';

const SearchResults = props => {
  // Show search results or error page if no results
  const results = props.data;
  let pics;
  if (results) {
    pics = results.map(pic => (
      <Picture
        url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${
          pic.id
        }_${pic.secret}.jpg`}
        key={pic.id}
        title={pic.title}
      />
    ));
  } else {
    pics = <NoResults />;
  }

  return (
    <div className="photo-container">
      <h2>Search Results</h2>
      <ul>{pics}</ul>
    </div>
  );
};

export default SearchResults;
