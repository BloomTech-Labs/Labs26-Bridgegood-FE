import React from 'react';
import Main from './Main/index';
import Mission from './Mission/Mission';
import WhoWeServe from './WhoWeServe/WhoWeServe';
import FAQ from './FAQ/FAQ';
import Supporters from './Supporters/Supporters';

const WhiteSpace = () => (
  <div
    style={{
      padding: '60px 0',
    }}
  ></div>
);
const HomePage = () => {
  return (
    <div
      style={{
        width: '1440px',
        margin: '0 auto',
      }}
    >
      <Main />
      <WhiteSpace />
      <Mission />
      <WhiteSpace />
      <WhoWeServe />
      <WhiteSpace />
      <FAQ />
      <WhiteSpace />
      <Supporters />
      <WhiteSpace />
    </div>
  );
};

export default HomePage;
