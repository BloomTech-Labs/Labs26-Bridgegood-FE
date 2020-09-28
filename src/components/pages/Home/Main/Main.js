import React from 'react';
import './Main.less';
import HeroImg from '../../../../assets/images/hero.png';
const Main = props => {
  return (
    <main className="main">
      <img src={HeroImg} alt="hero img" />
    </main>
  );
};

export default Main;
