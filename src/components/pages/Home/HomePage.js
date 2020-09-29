import React from 'react';
// import Header from '../../common/Header/';
import Main from './Main/index';
import Mission from './Mission/Mission';
import WhoWeServe from './WhoWeServe/WhoWeServe';
import FAQ from './FAQ/FAQ';
import Supporters from './Supporters/Supporters';
// import Footer from '../../common/Footer';

const WhiteSpace = () => (
  <div
    style={{
      padding: '60px 0',
    }}
  ></div>
);

const HomePage = ({ LoadingComponent }) => {
  return (
    <div
      style={{
        width: '1440px',
        margin: '0 auto',
      }}
    >
      {/* <Header /> */}
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
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
