import React from 'react';
import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import Buttons from './Btns/Buttons';

import classes from './Header.module.css';

const RenderHeader = () => {
  return (
    <header className={classes.Header}>
      <Logo />
      <Nav />
      <Buttons />
    </header>
  );
};

export default RenderHeader;
