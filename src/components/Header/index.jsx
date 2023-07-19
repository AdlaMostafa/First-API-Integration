import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { PATHS } from '../../router/paths';

const Header = () => {
  const isActive = (match, location) => match != null;

  return (
    <header className='header'>
      <h1>Header</h1>

      <nav>
        <ul>
          <li>
            <NavLink to={PATHS.HOME} isActive={isActive}>
              {({ match }) => (match ? <u>Home</u> : 'Home')}
            </NavLink>
          </li>
          <li>
            <NavLink to={PATHS.ABOUT} isActive={isActive}>
              {({ match }) => (match ? <u>About</u> : 'About')}
            </NavLink>
          </li>
          <li>
            <NavLink to={PATHS.POSTS.ROOT} isActive={isActive}>
              {({ match }) => (match ? <u>Posts</u> : 'Posts')}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
