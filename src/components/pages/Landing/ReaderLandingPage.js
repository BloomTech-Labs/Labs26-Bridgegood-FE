import React from 'react';
import Main from './Main/index';
import Mission from './Mission/Mission';
import FAQ from './FAQ/FAQ';
import Supporters from './Supporters/Supporters';

import { Header } from '../../common/index';
import { Footer } from '../../common/index';

const WhiteSpace = () => (
  <div
    style={{
      padding: '60px 0',
    }}
  ></div>
);

const Landing = () => {
  return (
    <div
      style={{
        width: '1440px',
        margin: '0 auto',
      }}
    >
      <Header />
      <Main />
      <WhiteSpace />
      <Mission />
      <WhiteSpace />
      <FAQ />
      <WhiteSpace />
      <Supporters />
      <WhiteSpace />
      <Footer />
    </div>
  );
};

export default Landing;
