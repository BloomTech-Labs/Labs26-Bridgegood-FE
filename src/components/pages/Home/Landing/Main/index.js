import React from 'react';
import heroImg from '../../../../../assets/images/hero.png';
import classes from './Main.module.css';
const Main = props => {
  return (
    <div className={classes.Main}>
      <img src={heroImg} alt="hero image" />
    </div>
  );
};

export default Main;
