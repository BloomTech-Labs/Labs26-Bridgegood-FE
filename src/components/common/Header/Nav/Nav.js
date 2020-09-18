import React from 'react';

import classes from './Nav.module.css';
const Nav = props => {
  return (
    <ul className={classes.Nav}>
      <li>
        {' '}
        <a href="/#"> about us</a>
      </li>
      <li>
        {' '}
        <a href="/#"> pay it forward</a>
      </li>
      <li>
        {' '}
        <a href="/#">
          {' '}
          Bridgegood.<span>org</span>
        </a>
      </li>
    </ul>
  );
};

export default Nav;
