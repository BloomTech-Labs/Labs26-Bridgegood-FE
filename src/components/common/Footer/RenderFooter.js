import React from 'react';
import './Footer.less';
import PhoneIcon from '../../../assets/images/phoneIcon.png';
import MsgIcon from '../../../assets/images/msgIcon.png';
import TimeIcon from '../../../assets/images/timeIcon.png';
import LocationIcon from '../../../assets/images/locationIcon.png';
import HeartIcon from '../../../assets/images/heartIcon.png';
const Footer = props => {
  return (
    <footer className="footer">
      <div className="top">
        <div className="sub-top">
          <section className="left-footer">
            <div className="icon">
              <div>
                <img src={PhoneIcon} alt="icon" />
              </div>
              <div>(510) 123 4567</div>
            </div>

            <div className="icon">
              <div>
                <img src={MsgIcon} alt="icon" />
              </div>
              <div>info@bridgegood.org</div>
            </div>
            <div className="icon">
              <div>
                <img src={LocationIcon} alt="icon" />
              </div>
              <div>95 Washington St, Oakland CA 94607</div>
            </div>

            <div className="icon">
              <div>
                <img src={TimeIcon} alt="icon" className="time-icon" />
              </div>
              <div>Tuesday - Thursday 10am - 6pm</div>
            </div>
          </section>

          <section className="right-footer">
            <div className="nav">
              <ul>
                <li>
                  <a href="/#">About Us</a>
                </li>
                <li>
                  <a href="/#">FAQ</a>
                </li>
                <li>
                  <a href="/#">Pay it Forward</a>
                </li>
                <li>
                  <a href="/#">BRIDGEGOOD.org</a>
                </li>
              </ul>
            </div>

            <div className="test">
              <button>Login</button>
              <button>Donate</button>
              <div className="Icon">
                <img src={HeartIcon} alt="icon" />
                <p>Proudly rooted in Oakland</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="bottom">
        ©2020 Oakland Digital Arts and Literacy Center Inc dba BRIDGEGOOD. All
        rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
