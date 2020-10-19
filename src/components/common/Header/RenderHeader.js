import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/images/logo.png';
import './Header.less';

function RenderHeader() {
  const app = useSelector(state => state.app);

  return (
    <header className="header">
      <div className="Logo">
        <Link to="/">
          <img src={Logo} alt="bridge good logo" />
        </Link>
      </div>

      <nav>
        <a href="https://bridgegood.org/about">About us</a>

        <Link to="/donate">pay it forward</Link>

        <a href="https://bridgegood.org">
          BRIDGEGOOD.<span>org</span>
        </a>
      </nav>

      <div className="Btns">
        {!app.isLoggedIn && (
          <button className="login-btn">
            <Link to="/login">Log In</Link>
          </button>
        )}
        {app.isLoggedIn && (
          <button className="login-btn">
            <Link to="/logout">Log Out</Link>
          </button>
        )}
        <button className="donate-btn">
          <Link to="/donate">donate</Link>
        </button>
      </div>
    </header>
  );
}

export default RenderHeader;
