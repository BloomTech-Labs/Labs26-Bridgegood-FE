import React from 'react';
import classes from './Mission.module.css';
import Buttons from './Buttons/Buttons';
import Information from './Information/Information';

const Mission = props => {
  return (
    <div className={classes.Mission}>
      <Buttons />
      <Information />
    </div>
  );
};

export default Mission;
