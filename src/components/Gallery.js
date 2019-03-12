import React from 'react';
import PhotoGallery from './PhotoGallery';
import '../App';
import NoResults from './NoResults';

// This functional component takes the data App's mainSearch and creates an array
const Gallery = props => {
  const results = props.data;
  let items;
  if (results && results.length > 0) {
    items = results.map(item => (
      <PhotoGallery
        src={`https://farm${item.farm}.staticflickr.com/${item.server}/${
          item.id
        }_${item.secret}.jpg`}
        key={item.id}
      />
    ));
  } else {
    items = <NoResults />;
  }

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>{props.loading ? <p>Loading...</p> : items}</ul>
    </div>
  );
};

export default Gallery;
