import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateStep } from '../../../../state/actions/StepsActions';
import { add_reservation } from '../../../../state/actions/AddResAction';
import '../MakeRes.css';

const RenderFinalizeRes = props => {
  const prevStep = () => {
    props.updateStep(1);
  };

  const reservationData = {
    duration: props.duration,
    date: props.date,
    room: props.room,
    time_slot: props.time_slot,
  };

  return (
    <>
      <div className="finalize-box">
        <div className="reservation-details">
          <div className="donation-details">
            <div>
              <h1>
                Your donation helps keep <br />
                creativity diverse in Oakland
              </h1>
            </div>
            <div>
              <h2>
                BRIDGEGOOD is a 503(c) nonprofit <br />
                and is run 100% through donations
              </h2>
            </div>
          </div>
          <div className="res-details">
            <p>Creative's Name</p>
            <p>Room</p>
            <p>Date</p>
            <p>Time</p>
          </div>
          <div className="user-res-info">
            <p>{props.user}</p>
            <p className="res-room">{props.room}</p>
            <p className="res-date">{props.date}</p>
            <p>{props.time_slot}</p>
          </div>
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
              <div>$1</div>
              <div>$5</div>
              <div>$10</div>
            </div>
            <div className="row-2">
              <div>$20</div>
              <div>Other Amount</div>
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
            <Link onClick={() => add_reservation(reservationData)} to="/">
              <p>I'll donate another time, finish my reservation</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    duration: state.duration,
    date: state.date,
    room: state.room,
    time_slot: state.time_slot,
    currentStep: state.currentStep,
  };
};
export default connect(mapStateToProps, { updateStep })(RenderFinalizeRes);
