import React from 'react';
import heroImg from '../../../../assets/images/hero.png';
import './Main.less';
const Main = props => {
  return (
    <div className="Main">
      <img src={heroImg} alt="hero image" />
    </div>
  );
};

export default Main;
