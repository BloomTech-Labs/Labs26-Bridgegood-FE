import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateDuration } from '../../../../state/actions/DurationAction'

import RenderDuration from './RenderDuration';

const DurationContainer = props => {
  const [newDuration, setNewDuration] = useState();

  const onChange = e => {
    setNewDuration(e.target.value);
  };

  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
    margin: '.75rem 0',
    lineHeight: '25.78px',
    fontSize: '20px'
  };

  return (
    <>
      <RenderDuration
        type='radio'
        onChange={onChange}
        radioStyle={radioStyle}
        value={newDuration}
      />
    </>
  );
}

const mapStateToProps = state => {
  return {
    durationOnProps: state.duration
  }
}

export default connect(mapStateToProps, { updateDuration })(DurationContainer);
