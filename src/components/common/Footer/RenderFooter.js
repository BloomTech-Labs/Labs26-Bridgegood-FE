import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.less';
import {
  Footer_1,
  Footer_2,
  Footer_3,
  Footer_4,
  Footer_5,
} from '../../../assets/index';
const Footer = ({ userInfo }) => {
  return (
    <footer className="footer">
      <div className="top">
        <div className="sub-top">
          <section className="left-footer">
            <div className="icon">
              <div>
                <img src={Footer_1} alt="icon" />
              </div>
              <div>
                <a href="tel:5104352945">510-435-2945</a>
              </div>
            </div>

            <div className="icon">
              <div>
                <img src={Footer_2} alt="icon" />
              </div>
              <div>info@bridgegood.org</div>
            </div>
            <div className="icon">
              <div>
                <img src={Footer_3} alt="icon" />
              </div>
              <div>95 Washington St, Oakland CA 94607</div>
            </div>

            <div className="icon">
              <div>
                <img src={Footer_4} alt="icon" className="time-icon" />
              </div>
              <div>Tuesday - Thursday 10am - 6pm</div>
            </div>
          </section>

          <section className="right-footer">
            <div className="nav">
              <ul>
                <li>
                  <a href="https://bridgegood.org/about/">About Us</a>
                </li>
                <li>
                  <a href="/#">FAQ</a>
                </li>
                <li>
                  <Link to="/donate">Pay it Forward</Link>
                </li>
                <li>
                  <a href="https://bridgegood.org/">
                    BRIDGEGOOD.<span>org</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="test">
              {!userInfo && (
                <button>
                  <Link to="/login">Log In</Link>
                </button>
              )}
              {userInfo && (
                <button>
                  <Link to="/logout">Log Out</Link>
                </button>
              )}
              <button>
                <Link to="/donate">donate</Link>
              </button>
              <div className="Icon">
                <img src={Footer_5} alt="icon" />
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
