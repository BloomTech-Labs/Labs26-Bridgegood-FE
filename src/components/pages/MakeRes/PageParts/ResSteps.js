import React from 'react';
import { Steps } from 'antd';
import { connect } from 'react-redux';
import { updateStep } from '../../../../state/actions/StepsActions';

const { Step } = Steps;

const ResSteps = props => {
  const currentStep = props.currentStep;

  return (
    <>
      <Steps current={currentStep}>
        <Step />
        <Step />
        <Step />
      </Steps>
      <div className="step-def">
        <div className="step-1">Select Time</div>
        <div className="step-2">Fill Reservation Info</div>
        <div className="step-3">Donate & Complete Reservation</div>
      </div>
      <p></p>
    </>
  );
};

const mapStateToProps = state => {
  return {
    currentStep: state.currentStep,
  };
};

export default connect(mapStateToProps, { updateStep })(ResSteps);
