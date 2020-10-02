import React from 'react';
import './WhoWeServe.less';
import { Support_1, Support_2, Support_3 } from '../../../../assets/index';

const WhoWeServer = props => {
  return (
    <section className="WhoWeServe">
      <p>WHO WE SERVE</p>
      <div className="SubWhoWeServe">
        <div>
          <img src={Support_1} alt="Creatives Img" />
          <h3>Schools in Northern California</h3>
        </div>
        <div>
          <img src={Support_2} alt="Creatives Img" />
          <h3>Black, Indigenous, People of Color</h3>
        </div>
        <div>
          <img src={Support_3} alt="Creatives Img" />
          <h3>BRIDGEGOOD Creatives</h3>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServer;
