import React from 'react';
import { Steps } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  UPDATE_STEP,
  // updateStep,
} from '../../../../state/actions/StepsActions';

const { Step } = Steps;

// const ResSteps = ({currentStep, duration, time_slot}) => {
export default function ResSteps() {
  const dispatch = useDispatch();
  const { currentStep, duration, time_slot } = useSelector(
    state => state.reservation
  );
  // const currentStep = props.currentStep;
  // const selectDuration = props.duration;
  // const selectTimeSlot = props.time_slot;
  console.log(time_slot);

  const stepOne = () => {
    dispatch({ type: UPDATE_STEP, payload: 0 });
  };

  const stepTwo = () => {
    if (duration === undefined) {
      return null;
    } else {
      dispatch({ type: UPDATE_STEP, payload: 1 });
    }
  };

  const stepThree = () => {
    if (time_slot === 'None') {
      return null;
    } else {
      dispatch({ type: UPDATE_STEP, payload: 2 });
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
}

// const mapStateToProps = state => {
//   return {
//     currentStep: state.currentStep,
//     duration: state.duration,
//     time_slot: state.time_slot,
//   };
// };

// export default connect(mapStateToProps, { updateStep })(ResSteps);
