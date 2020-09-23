import React from 'react';
// in case the style in the main component gives a hard time to debug
// we can use alternative solution.
// import heroImg from '../../../../../assets/images/hero.png';
import Header from '../Header/index';
import classes from './Main.module.css';
const Main = props => {
  return (
    <div className={classes.Main}>
      {/* <Header /> */}
      {/* <img src={heroImg} alt="hero image" /> */}
    </div>
  );
};

export default Main;
