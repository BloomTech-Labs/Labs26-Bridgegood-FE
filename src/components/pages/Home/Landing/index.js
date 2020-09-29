import React from 'react';
import Main from './Main/index';
import Mission from './Mission/Mission';
import WhoWeServe from './WhoWeServe/WhoWeServe';
import FAQ from './FAQ/FAQ';
import Supporters from './Supporters/Supporters';

// add white space between components
import WhiteSpace from '../../../common/WhiteSpace';

const Landing = () => {
  return (
    <>
      <Main />

      <div
        style={{
          width: '1440px',
          margin: ' 0 auto',
        }}
      >
        <Mission />
        <WhiteSpace />
        <WhoWeServe />
        <WhiteSpace />
        <FAQ />
        <WhiteSpace />
        <Supporters />
        <WhiteSpace />
      </div>
    </>
  );
};

export default Landing;
