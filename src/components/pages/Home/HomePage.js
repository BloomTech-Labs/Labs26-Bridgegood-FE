import React from 'react';
import Main from './Main/Main';
import Mission from './Mission/Mission';
import WhoWeServe from './WhoWeServe/WhoWeServe';
import FAQ from './FAQ/FAQ';
import Supporters from './Supporters/Supporters';
import WhiteSpace from '../../common/WhiteSpace';
const HomePage = () => {
  return (
    <>
      <div
        style={{
          width: '95%',
          margin: '0 auto',
        }}
      >
        <Main />
        <Mission />
        <WhiteSpace />
        <WhoWeServe />
        <WhiteSpace />
        <FAQ />
        <WhiteSpace />
        <Supporters />
      </div>
    </>
  );
};

export default HomePage;
