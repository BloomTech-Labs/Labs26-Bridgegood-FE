import React from 'react';
import classes from './WhoWeServe.module.css';
import CreativesImg from '../../../../assets/images/creatives.png';
import FrameImg from '../../../../assets/images/Frame.png';
import SchoolImgLoc from '../../../../assets/images/schoolLocation.png';

const WhoWeServer = props => {
  return (
    <section className={classes.WhoWeServe}>
      <p>WHO WE SERVE</p>
      <div className={classes.SubWhoWeServe}>
        <div>
          <img src={SchoolImgLoc} alt="Creatives Img" />
          <h2>Schools in Northern California</h2>
        </div>
        <div>
          <img src={FrameImg} alt="Creatives Img" />
          <h2>Black, Indigenous, People of Color</h2>
        </div>
        <div>
          <img src={CreativesImg} alt="Creatives Img" />
          <h2>BRIDGEGOOD Creatives</h2>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServer;
