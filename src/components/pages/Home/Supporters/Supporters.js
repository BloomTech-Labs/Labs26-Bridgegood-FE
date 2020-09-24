import React from 'react';
import classes from './Supporters.module.css';
import TwitterLogo from '../../../../assets/images/Twitter.png';
import GoogleLogo from '../../../../assets/images/Google.png';
import Adobe from '../../../../assets/images/Adobe.png';
import GoldenStateLogo from '../../../../assets/images/Golden_State.png';
const Supporters = props => {
  return (
    <>
      <section className={classes.Supporters}>
        <h3>BRIDGEGOOD SUPPORTERS</h3>
        <div className={classes.Logos}>
          <div>
            <img src={GoldenStateLogo} alt="logon" />
          </div>
          <div>
            <img src={GoogleLogo} alt="logon" />
          </div>
          <div
            style={{
              marginLeft: '50px',
            }}
          >
            <img src={Adobe} alt="logon" />
          </div>
          <div>
            <img src={TwitterLogo} alt="logon" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Supporters;
