import React from 'react';
import './WhoWeServe.less';
import CreativesImg from '../../../../assets/images/creatives.png';
import FrameImg from '../../../../assets/images/Frame.png';
import SchoolImgLoc from '../../../../assets/images/schoolLocation.png';

const WhoWeServer = props => {
  return (
    <section className="WhoWeServe">
      <p>WHO WE SERVE</p>
      <div className="SubWhoWeServe">
        <div>
          <img src={SchoolImgLoc} alt="Creatives Img" />
          <h3>Schools in Northern California</h3>
        </div>
        <div>
          <img src={FrameImg} alt="Creatives Img" />
          <h3>Black, Indigenous, People of Color</h3>
        </div>
        <div>
          <img src={CreativesImg} alt="Creatives Img" />
          <h3>BRIDGEGOOD Creatives</h3>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServer;
