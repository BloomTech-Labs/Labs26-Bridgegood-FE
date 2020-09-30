import React from 'react';
import { connect } from 'react-redux';
import { updateDuration } from '../../../../state/actions/DurationAction';
import { updateStep } from '../../../../state/actions/StepsActions';
import '../MakeRes.css';

const RenderFinalizeRes = props => {
  return <>Hi</>;
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
