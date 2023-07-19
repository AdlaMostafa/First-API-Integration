import React from 'react';

import { Link } from 'react-router-dom';

import { PATHS } from '../../router/paths';
const HomePage =()=>{
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        <Link to={PATHS.ABOUT}>learn more...</Link>
      </p>
    </div>
  );
}


export default HomePage;