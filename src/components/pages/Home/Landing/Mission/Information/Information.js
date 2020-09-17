import React from 'react';
import { Button } from 'antd';
import classes from './Information.module.css';

const Information = props => {
  return (
    <section className={classes.Information}>
      <div className={classes.ourMission}>
        <section className={classes.Tob}>
          <h2>our mission</h2>
        </section>

        <section className={classes.Bottom}>
          <h1>
            Oakland’s FIRST tech-for-good, community-access co-working space and
            education center
          </h1>
        </section>
      </div>

      <div className={classes.payForward}>
        <section className={classes.Tob}>
          <p>
            Starting a career in design can be intimidating without a strong,
            supportive network. The BRIDGEGOOD Creative Studio brings together
            students of diverse background with common passion in design.
          </p>
          <p>
            Nobody will be turned away because of financial restraints. That’s
            why we are counting on your support to help make a lasting
            difference for the students in the Bay Area.
          </p>
        </section>
        <section className={classes.Bottom}>
          <Button>pay it forward</Button>
          <p>HOW WE ARE HELPING IMPROVE DESIGN INCLUSION</p>
        </section>
      </div>
    </section>
  );
};

export default Information;
