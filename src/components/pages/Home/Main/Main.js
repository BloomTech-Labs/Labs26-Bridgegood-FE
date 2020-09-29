import React from 'react';
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
              Reserve a spot now{' '}
              <span>
                <img src={arrowIcon} alt="arrow icon" />
              </span>
            </button>
            <button>
              Consider a donation{' '}
              <span>
                <img src={arrowIcon} alt="arrow icon" />
              </span>{' '}
            </button>
            <button>
              Learn more about us{' '}
              <span>
                <img src={arrowIcon} alt="arrow icon" />
              </span>
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
