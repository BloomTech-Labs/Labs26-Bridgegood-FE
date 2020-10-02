import React from 'react';
import { connect } from 'react-redux';
import { updateDuration } from '../../../../state/actions/DurationAction';
import { updateStep } from '../../../../state/actions/StepsActions';
import '../MakeRes.css';

const RenderFinalizeRes = props => {
  return (
    <>
      <div className="finalize-box">
        <div>
          <div>
            <h1>
              Your donation helps keep <br />
              creativity diverse in Oakland
            </h1>
            <h2>
              BRIDGEGOOD is a 503(c) nonprofit <br />
              and is run 100% through donations
            </h2>
          </div>
          <div>
            <p>Creative's Name</p>
            <p>Room</p>
            <p>Date</p>
            <p>Time</p>
          </div>
          <div>
            <p>{props.user}</p>
            <p>{props.room}</p>
            <p>{props.date}</p>
            <p>{props.time_slot}</p>
          </div>
          <p>Edit my reservation</p>
        </div>
        <div>
          <div>
            <h2>Choose an amount to give</h2>
          </div>
          <div>
            <div>$1</div>
            <div>$5</div>
            <div>$10</div>
            <div>$20</div>
            <div>Other Amount</div>
            <div>DONATE</div>
          </div>
          <div>
            <p>
              Your $5 donation gives 1 student access to the <br /> studio. 100%
              of the donation funds the space.
            </p>
            <p>I'll donate another time, finish my reservation</p>
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
export default connect(mapStateToProps)(RenderFinalizeRes);
