import React from 'react';
import classes from './Buttons.module.css';

const Buttons = props => {
  return (
    <section className={classes.Btns}>
      <button className={classes.Reserve}>reserve a spot </button>
      <button className={classes.LearnMore}>learn more </button>
    </section>
  );
};

export default Buttons;
