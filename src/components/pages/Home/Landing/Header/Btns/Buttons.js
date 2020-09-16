import React from 'react';
import { Button } from 'antd';
import classes from './Buttons.module.css';
const Buttons = props => {
  return (
    <div className={classes.Buttons}>
      <Button className={classes.btn_login}>log in</Button>
      <Button className={classes.btn_donate}>donate</Button>
    </div>
  );
};

export default Buttons;
