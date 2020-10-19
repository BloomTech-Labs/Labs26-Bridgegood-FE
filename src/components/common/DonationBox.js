import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

import { UPDATE_STEP } from '../../state/reducers/MakeResReducer';
import { UPDATE_DONATION } from '../../state/reducers/MakeResReducer';
import '../pages/MakeRes/MakeRes.css';
import { ADD_RESERVATION } from '../../state/actions/AddResAction';
import { useHistory } from 'react-router-dom';

export default function DonationBox() {
  let history = useHistory();

  function handleClick() {
    history.push('/confirmation/:resid');
  }

  const dispatch = useDispatch();
  const {
    date,
    time_slot,
    duration,
    room,
    currentStep,
    donation,
    user,
    reservations,
  } = useSelector(state => state.reservation);

  const clicked = donation;

  const reservationData = {
    duration: duration,
    date: date,
    room: room,
    time_slot: time_slot,
  };

  return (
    <div className="donation-box">
      <div className="header-box">
        <h2>Choose an amount to give</h2>
      </div>
      <div className="donation-btns">
        <Row className="row-1">
          <Col
            span={7.5}
            onClick={() => dispatch({ type: UPDATE_DONATION, payload: 1 })}
            className={clicked === 1 ? 'active-donate-btn' : 'row-1-div'}
          >
            $1
          </Col>
          <Col
            span={7.5}
            onClick={() => dispatch({ type: UPDATE_DONATION, payload: 5 })}
            className={clicked === 5 ? 'active-donate-btn' : 'row-1-div'}
          >
            $5
          </Col>
          <Col
            span={7.5}
            onClick={() => dispatch({ type: UPDATE_DONATION, payload: 10 })}
            className={clicked === 10 ? 'active-donate-btn' : 'row-1-div'}
          >
            $10
          </Col>
        </Row>
        <Row className="row-2">
          <Col
            span={7.5}
            onClick={() => dispatch({ type: UPDATE_DONATION, payload: 20 })}
            className={clicked === 20 ? 'active-donation-btn-2' : 'row-2-div'}
          >
            $20
          </Col>
          <Col
            span={15.5}
            onClick={() => dispatch({ type: UPDATE_DONATION, payload: 'OA' })}
            className={
              clicked === 'OA' ? 'active-donation-btn-2-OA' : 'row-2-div-OA'
            }
          >
            Other Amount
          </Col>
        </Row>
        <Row className="row-3">
          <Col span={24} id="donate-btn">
            <h2>DONATE</h2>
          </Col>
        </Row>
      </div>
      <div className="donation-alt">
        <p>
          Your $5 donation gives 1 student access to the <br /> studio. 100% of
          the donation funds the space.
        </p>
        {currentStep === 2 && (
          <Link onClick={handleClick}>
            <p>I'll donate another time, finish my reservation</p>
          </Link>
        )}
      </div>
    </div>
  );
}
