import React from 'react';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import Buttons from './Btns/Buttons';

import classes from './Header.module.css';

function RenderHeader({ isLoggedIn, userInfo, authService }) {
  return (
    <div className={classes.Header}>
      <Logo />
      <Nav />
      <Buttons />
    </div>
  );
}

export default RenderHeader;
