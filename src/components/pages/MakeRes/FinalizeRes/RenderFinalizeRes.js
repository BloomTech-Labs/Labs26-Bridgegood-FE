import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

import { updateStep } from '../../../../state/actions/StepsActions';
import { addReservation } from '../../../../state/actions/AddResAction';
import { updateDonation } from '../../../../state/actions/DonationAction';
import '../MakeRes.css';

const RenderFinalizeRes = props => {
  const prevStep = () => {
    props.updateStep(1);
  };

  const formattedDate = () => {
    var selectedDate = props.date;
    var month = selectedDate.substr(5, 2);
    var day = selectedDate.substr(8, 2);
    var year = selectedDate.substr(0, 4);
    if (month === '01') {
      month = 'January';
    } else if (month === '02') {
      month = 'February';
    } else if (month === '03') {
      month = 'March';
    } else if (month === '04') {
      month = 'April';
    } else if (month === '05') {
      month = 'May';
    } else if (month === '06') {
      month = 'June';
    } else if (month === '07') {
      month = 'July';
    } else if (month === '08') {
      month = 'August';
    } else if (month === '09') {
      month = 'September';
    } else if (month === '10') {
      month = 'October';
    } else if (month === '11') {
      month = 'November';
    } else if (month === '12') {
      month = 'December';
    }
    return month + ' ' + day + ', ' + year;
  };

  const formattedTime = () => {
    var time_slot = props.time_slot;
    var duration = props.duration;
    var time_window = 'None';

    if (duration === '2h') {
      if (time_slot === '10') {
        time_window = '10:00AM - 12:00PM';
      } else if (time_slot === '11') {
        time_window = '11:00AM - 1:00PM';
      } else if (time_slot === '12') {
        time_window = '12:00PM - 2:00PM';
      } else if (time_slot === '13') {
        time_window = '1:00PM - 3:00PM';
      } else if (time_slot === '14') {
        time_window = '2:00PM - 4:00PM';
      } else if (time_slot === '15') {
        time_window = '3:00PM - 5:00PM';
      } else if (time_slot === '16') {
        time_window = '4:00PM - 6:00PM';
      } else if (time_slot === '17') {
        time_window = '5:00PM - 6:00PM';
      }
    } else if (duration === '4h') {
      if (time_slot === '10') {
        time_window = '10:00AM - 2:00PM';
      } else if (time_slot === '11') {
        time_window = '11:00AM - 3:00PM';
      } else if (time_slot === '12') {
        time_window = '12:00PM - 4:00PM';
      } else if (time_slot === '13') {
        time_window = '1:00PM - 5:00PM';
      } else if (time_slot === '14') {
        time_window = '2:00PM - 6:00PM';
      } else if (time_slot === '15') {
        time_window = '3:00PM - 6:00PM';
      }
    } else if (duration === '6h') {
      if (time_slot === '10') {
        time_window = '10:00AM - 4:00PM';
      } else if (time_slot === '11') {
        time_window = '11:00AM - 5:00PM';
      } else if (time_slot === '12') {
        time_window = '12:00PM - 6:00PM';
      }
    }
    return time_window;
  };

  const reservationData = {
    duration: props.duration,
    date: props.date,
    room: props.room,
    time_slot: props.time_slot,
  };

  const handleClick = e => {
    e.preventDefault();
    props.addReservation(reservationData);
  };

  const clicked = props.donation;

  return (
    <>
      <div className="finalize-box">
        <div className="reservation-details">
          <Row className="donation-details">
            <Col>
              <h1>
                Your donation helps keep <br />
                creativity diverse in Oakland
              </h1>
            </Col>
            <Col>
              <h2>
                BRIDGEGOOD is a 503(c) nonprofit <br />
                and is run 100% through donations
              </h2>
            </Col>
          </Row>
          <Row className="res-details">
            <Col span={6}>
              <p>Creative's Name</p>
            </Col>
            <Col span={6}>
              <p>Room</p>
            </Col>
            <Col span={6}>
              <p>Date</p>
            </Col>
            <Col span={6}>
              <p>Time</p>
            </Col>
          </Row>
          <Row className="user-res-info">
            <Col span={6}>
              <p>{props.user}</p>
            </Col>
            <Col span={6}>
              <p>{props.room}</p>
            </Col>
            <Col span={6}>
              <p>{formattedDate()}</p>
            </Col>
            <Col span={6}>
              <p>{formattedTime()}</p>
            </Col>
          </Row>
          <div className="edit-res" onClick={prevStep}>
            Edit my reservation
          </div>
        </div>
        <div className="donation-box">
          <div className="header-box">
            <h2>Choose an amount to give</h2>
          </div>
          <div className="donation-btns">
            <div className="row-1">
              <div
                onClick={() => props.updateDonation('1')}
                className={clicked === '1' ? 'active-donate-btn' : 'row-1-div'}
              >
                $1
              </div>
              <div
                onClick={() => props.updateDonation('5')}
                className={clicked === '5' ? 'active-donate-btn' : 'row-1-div'}
              >
                $5
              </div>
              <div
                onClick={() => props.updateDonation('10')}
                className={clicked === '10' ? 'active-donate-btn' : 'row-1-div'}
              >
                $10
              </div>
            </div>
            <div className="row-2">
              <div
                onClick={() => props.updateDonation('20')}
                className={
                  clicked === '20' ? 'active-donation-btn-2' : 'row-2-div'
                }
              >
                $20
              </div>
              <div
                onClick={() => props.updateDonation('OA')}
                className={
                  clicked === 'OA' ? 'active-donation-btn-2-OA' : 'row-2-div-OA'
                }
              >
                Other Amount
              </div>
            </div>
            <div id="donate-btn">
              <h2>DONATE</h2>
            </div>
          </div>
          <div className="donation-alt">
            <p>
              Your $5 donation gives 1 student access to the <br /> studio. 100%
              of the donation funds the space.
            </p>
            <Link onClick={handleClick} to="/">
              <p>I'll donate another time, finish my reservation</p>
            </Link>
            {/* <div>Get state</div> */}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    reservations: state.reservations,
    duration: state.duration,
    date: state.date,
    room: state.room,
    time_slot: state.time_slot,
    currentStep: state.currentStep,
    donation: state.donation,
  };
};
export default connect(mapStateToProps, {
  updateStep,
  addReservation,
  updateDonation,
})(RenderFinalizeRes);
