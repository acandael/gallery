import React from 'react';
import Picture from './Picture';
import NoResults from './NoResults';

const SearchResults = props => {
  // {/* display seach results here
  // if no search results available,
  // display an error message */}
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
