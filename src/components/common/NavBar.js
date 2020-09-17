import React from 'react';
import './NavBar.less';

const NavBar = () => {
  return (
    <div className="TopBar">
      <div className="BridgeGood">
        <a href="https://bridgegood.com/"></a>
      </div>
      <div className="Nav">
        <a href="https://bridgegood.com/about">ABOUT US</a>
        <a href="http://sautiafrica.org/pay-it-forward/">PAY IT FORWARD</a>
        <a href="https://bridgegood.org/">BRIDGEGOOD.ORG</a>
        <a href="http://sautiafrica.org/Log-in/">LOG IN</a>
        <a href="http://sautiafrica.org/donate/">DONATE</a>
      </div>
    </div>
  );
};

export default NavBar;
