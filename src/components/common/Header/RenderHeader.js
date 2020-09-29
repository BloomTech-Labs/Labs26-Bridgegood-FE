import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png';
import './Header.less';

const RenderHeader = () => {
  return (
    <header className="header">
      <div className="Logo">
        <Link to="/">
          <img src={Logo} alt="bridge good logo" />
        </Link>
      </div>
      <nav>
        <Link>About us</Link>
        <Link>pay it forward</Link>
        <Link>
          bridgegood.<span>org</span>
        </Link>
      </nav>

      <div className="Btns">
        <button className="login-btn">
          <Link to="/login">Login</Link>
        </button>
        <button className="donate-btn">
          <Link>donate</Link>
        </button>
      </div>
    </header>
  );
};

export default RenderHeader;
