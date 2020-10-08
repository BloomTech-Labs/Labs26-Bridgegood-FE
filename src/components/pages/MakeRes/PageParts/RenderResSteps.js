import React from 'react';
import { Steps } from 'antd';
import { connect } from 'react-redux';
import { updateStep } from '../../../../state/actions/StepsActions';

const { Step } = Steps;

const ResSteps = props => {
  const currentStep = props.currentStep;
  const selectDuration = props.duration;
  const selectTimeSlot = props.time_slot;
  console.log(selectTimeSlot);

  const stepOne = () => {
    props.updateStep(0);
  };

  const stepTwo = () => {
    if (selectDuration === undefined) {
      return null;
    } else {
      props.updateStep(1);
    }
  };

  const stepThree = () => {
    if (selectTimeSlot === 'None') {
      return null;
    } else {
      props.updateStep(2);
    }
  };

  return (
    <>
      <Steps current={currentStep}>
        <Step onClick={stepOne} />
        <Step onClick={stepTwo} />
        <Step onClick={stepThree} />
      </Steps>
      <div className="step-def">
        <div onClick={stepOne} className="step-1">
          Select Time
        </div>
        <div onClick={stepTwo} className="step-2">
          Fill Reservation Info
        </div>
        <div onClick={stepThree} className="step-3">
          Donate & Complete Reservation
        </div>
      </div>
      <p></p>
    </>
  );
};

const mapStateToProps = state => {
  return {
    currentStep: state.currentStep,
    duration: state.duration,
    time_slot: state.time_slot,
  };
};

export default connect(mapStateToProps, { updateStep })(ResSteps);
