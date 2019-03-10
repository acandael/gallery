import React from 'react';

const Picture = props => {
  return (
    <li>
      <img src={props.url} alt={props.title} />
    </li>
  );
};

export default Picture;
