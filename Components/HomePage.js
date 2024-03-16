import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className='home'>
      <div>Hello! We are glad to welcome you to our website for viewing cars!</div>
      <Link to={'/cars'} className='home__link'>
        Go to view
      </Link>
    </div>
  );
};
