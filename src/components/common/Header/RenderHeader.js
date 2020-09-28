import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png';
import './Header.less';

const RenderHeader = () => {
  return (
    <header className="header">
      <div className="Logo">
        <img src={Logo} alt="bridge good logo" />
      </div>
      <nav>
        <Link>About us</Link>
        <Link>pay it forward</Link>
        <Link>bridgegood.org</Link>
      </nav>
      <div className="Btns">
        <button className="login-btn">Log in</button>
        <button className="donate-btn">donate</button>
      </div>
    </header>
  );
};

export default RenderHeader;
