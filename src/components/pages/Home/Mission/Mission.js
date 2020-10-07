import React from 'react';
import PloygonIcon from '../../../../assets/images/Polygon.png';
import line from '../../../../assets/images/line.png';
import blueLocationIcon from '../../../../assets/images/blueLocationIcon.png';
import './Mission.less';

const Mission = props => {
  return (
    <div className="mission">
      <section className="mission-left">
        <p>OUR MISSION</p>
        <div>
          <h2>
            Oakland’s FIRST tech-for-good,
            <br /> community-access co-working <br />
            space and education center
          </h2>
          <img src={blueLocationIcon} alt="location icon" />
          <span>95 Washington St, Oakland CA 94607</span>
        </div>
      </section>

      <section className="mission-right">
        <p>
          Starting a career in design can be intimidating without a strong,
          supportive network. The BRIDGEGOOD Creative Studio brings together
          students of diverse background with common passion in design.
        </p>
        <p>
          Nobody will be turned away because of financial restraints. That’s why
          we are counting on your support to help make a lasting difference for
          the students in the Bay Area.
        </p>
        <div>
          <button>
            <a href="#">Pay It Forward</a>
          </button>
          <span>
            <a href="https://bridgegood.org/impact/">
              HOW WE ARE HELPING IMPROVE DESIGN INCLUSION
            </a>
          </span>
          <img src={PloygonIcon} alt="PloygonIcon " />
        </div>
      </section>
    </div>
  );
};

export default Mission;
