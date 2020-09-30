import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png';
import './Header.less';

function RenderHeader({ isLoggedIn, userInfo, authService }) {
  return (
    <header className="header">
      <div className="Logo">
        <Link to="/">
          <img src={Logo} alt="bridge good logo" />
        </Link>
      </div>

      <nav>
        <a href="https://bridgegood.org/about/">About us</a>

        <Link to="/donate">pay it forward</Link>

        <a href="https://bridgegood.org/">
          bridgegood.<span>org</span>
        </a>
      </nav>

      <div className="Btns">
        <button className="login-btn">
          <Link to="/login">Login</Link>
        </button>
        <button className="donate-btn">
          <Link to="/donate">donate</Link>
        </button>
      </div>
    </header>
  );
}

export default RenderHeader;
