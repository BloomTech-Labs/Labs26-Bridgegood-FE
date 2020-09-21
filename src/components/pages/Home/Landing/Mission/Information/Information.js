import React from 'react';
import { Button } from 'antd';
import classes from './Information.module.css';
import ImgIcon from '../../../../../../assets/images/Polygon.png';

const Information = props => {
  return (
    <section className={classes.Information}>
      <div className={classes.Left}>
        <p>OUR MISSION</p>
        <h1>
          Oakland’s FIRST tech-for-good, community-access co-working space and
          education center
        </h1>
      </div>
      <div className={classes.Right}>
        <p>
          Starting a career in design can be intimidating without a strong,
          supportive network. The BRIDGEGOOD Creative Studio brings together
          students of diverse background with common passion in design.
        </p>
        <p>
          Nobody will be turned away because of financial restraints. That’s why
          we are counting on your support to help make a lasting difference for
          the students in the Bay Area.
        </p>
        <section>
          <button>Pay It Forward</button>
          <span>HOW WE ARE HELPING IMPROVE DESIGN INCLUSION</span>{' '}
          <span>
            <img src={ImgIcon} />
          </span>
        </section>
      </div>
    </section>
  );
};

export default Information;
