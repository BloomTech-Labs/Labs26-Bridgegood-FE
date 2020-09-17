import React from 'react';
import { Button } from 'antd';
import classes from './Buttons.module.css';

const Buttons = props => {
  return (
    <section className={classes.Btns}>
      <Button className={classes.Reserve}>reserve a spot </Button>
      <Button className={classes.LearnMore}>learn more </Button>
    </section>
  );
};

export default Buttons;
