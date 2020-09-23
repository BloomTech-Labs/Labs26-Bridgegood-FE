import React from 'react';
import classes from './Buttons.module.css';
import { Link } from 'react-router-dom';
const Buttons = props => {
  return (
    <div className={classes.Buttons}>
      <Link to="/login">
        <button className={classes.btn_login}>log in</button>
      </Link>
      <Link>
        <button className={classes.btn_donate}>donate</button>
      </Link>
    </div>
  );
};

export default Buttons;
