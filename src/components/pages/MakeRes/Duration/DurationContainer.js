import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateDuration } from '../../../../state/actions/DurationAction'

import RenderDuration from './RenderDuration';
import Header from '../../Home/Landing/Header/index';
import Footer from '../../Home/Landing/Footer/Footer';

const DurationContainer = props => {
  const [newDuration, setNewDuration] = useState();

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setNewDuration(e.target.value);
  };

  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };

  const value = newDuration

  return (
    <>
      <Header />
      <RenderDuration
        type='radio'
        onChange={onChange}
        onClick={() => props.updateDuration(newDuration)}
        radioStyle={radioStyle}
        value={value}
      />
      <Footer />
    </>
  );
}

const mapStateToProps = state => {
  console.log("STATE",state);
  return {
    durationOnProps: state.duration
  }
}

export default connect(mapStateToProps, { updateDuration })(DurationContainer);
