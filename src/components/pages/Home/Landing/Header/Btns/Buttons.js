import React from 'react';
import Button from '../../../../../common/Button';
import classes from './Buttons.module.css';
const Buttons = props => {
  return (
    <div className={classes.Buttons}>
      <button className={classes.btn_login}>log in</button>
      <button className={classes.btn_donate}>donate</button>
    </div>
  );
};

export default Buttons;
