import React from 'react';
import logoImg from '../../../../assets/images/logo.png';
import classes from './Logo.module.css';
const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logoImg} alt="bridge good logo" />
    </div>
  );
};

export default Logo;
