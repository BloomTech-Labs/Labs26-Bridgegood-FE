import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../../../../../assets/images/logo.png';
import classes from './Logo.module.css';
const Logo = () => {
  return (
    <div className={classes.Logo}>
      <Link to="/">
        <img src={logoImg} alt="bridge good logo" />
      </Link>
    </div>
  );
};

export default Logo;
