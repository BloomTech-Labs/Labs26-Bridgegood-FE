import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateDuration } from '../../../../state/actions/DurationAction'

import RenderFinalizeRes from './RenderFinalizeRes';

const FinalizeResContainer = props => {
  return (
    <>
      <RenderFinalizeRes />
    </>
  );
}

const mapStateToProps = state => {
  return {
    duration: state.duration,
    date: state.date,
    room: state.room,
    time_slot: state.time_slot,
    currentStep: state.currentStep

  }
}

export default connect(mapStateToProps)(FinalizeResContainer);