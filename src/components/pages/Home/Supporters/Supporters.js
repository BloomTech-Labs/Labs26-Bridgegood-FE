import React from 'react';
import './Supporters.less';
import { Adobe, Twitter, Google, Golden_state } from '../../../../assets/index';
const Supporters = props => {
  return (
    <>
      <section className="Supporters">
        <h4>BRIDGEGOOD SUPPORTERS</h4>

        <div className="Logos">
          <div>
            <img src={Golden_state} alt="logon" />
          </div>
          <div>
            <img src={Google} alt="logon" />
          </div>
          <div
            style={{
              marginLeft: '50px',
            }}
          >
            <img src={Adobe} alt="logon" />
          </div>
          <div>
            <img src={Twitter} alt="logon" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Supporters;
