import React from 'react';
import { connect } from 'react-redux';
import { updateDuration } from '../../../../state/actions/DurationAction';
import { updateStep } from '../../../../state/actions/StepsActions';
import '../MakeRes.css';

const RenderFinalizeRes = props => {
  return (
    <>
      <div>
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
        </div>
        <div></div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    duration: state.duration,
    date: state.date,
    room: state.room,
    time_slot: state.time_slot,
    currentStep: state.currentStep,
  };
};
export default connect(mapStateToProps)(RenderFinalizeRes);
