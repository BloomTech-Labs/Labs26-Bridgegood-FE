import React from 'react';
import { Link } from 'react-router-dom';
import './Main.less';
import HeroImg from '../../../../assets/images/hero.png';
import arrowIcon from '../../../../assets/images/arrow.png';
const Main = props => {
  return (
    <main>
      <div className="main">
        <section className="heading-section">
          <h1>
            Welcome to your creative hub!
            <br />
            Get inspired and stay <br />
            connected
          </h1>
          <div>
            <button>
              <Link to="/login">
                Reserve a spot now
                <span>
                  <img src={arrowIcon} alt="arrow icon" />
                </span>
              </Link>
            </button>

            <button>
              <Link to="/donate">
                Consider a donation
                <span>
                  <img src={arrowIcon} alt="arrow icon" />
                </span>
              </Link>
            </button>
            <button>
              <a href="https://bridgegood.org/about/">
                Learn more about us
                <span>
                  <img src={arrowIcon} alt="arrow icon" />
                </span>
              </a>
            </button>
          </div>
        </section>
        <section className="img-section">
          <img src={HeroImg} alt="hero img" />
        </section>
      </div>
    </main>
  );
};

export default Main;
