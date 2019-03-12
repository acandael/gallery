import React from 'react';

const Page404 = () => (
  <div>
    <ul>
      <li className="not-found">
        <img
          src={require('../images/not-found.png')}
          style={{
            width: 200,
            height: 200,
            display: 'block',
            margin: 'auto',
            position: 'relative'
          }}
          alt=""
        />
        <h2>Page Not Found</h2>
      </li>
    </ul>
  </div>
);

export default Page404;
