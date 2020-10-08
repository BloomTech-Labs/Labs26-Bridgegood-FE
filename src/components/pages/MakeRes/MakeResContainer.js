import React from 'react';
import { connect } from 'react-redux';

import RenderCalendar from './PageParts/RenderCalendar';
import RenderRoomPick from './PageParts/RenderRoomPick';
import RenderTimeSlot from './PageParts/RenderTimeSlot';
import ResSteps from './PageParts/RenderResSteps';
import { updateStep } from '../../../state/actions/StepsActions';
import { DurationPage } from './Duration';
import { FinalizeResPage } from './FinalizeRes';
import './MakeRes.css';

function ResContainer(props) {
  const currentStep = props.currentStep;

  if (currentStep === 1) {
    return (
      <>
        <div className="steps-box">
          <div className="steps">
            <ResSteps />
          </div>
        </div>

        <div className="big-box">
          <div className="row">
            <div className="col-1 col">
              <h2>Select a Date</h2>
              <div className="components">
                <RenderCalendar />
              </div>
            </div>

            <div className="col-2 col">
              <h2>Select a Room</h2>
              <div className="components">
                <RenderRoomPick />
              </div>
            </div>

            <div className="col-3 col">
              <h2>Select Opening</h2>
              <div className="components">
                <RenderTimeSlot />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else if (currentStep === 2) {
    return (
      <>
        <div className="steps-box">
          <div className="steps">
            <ResSteps />
          </div>
        </div>

        <FinalizeResPage />
      </>
    );
  } else {
    return (
      <>
        <div className="steps-box">
          <div className="steps">
            <ResSteps />
          </div>
        </div>

        <DurationPage />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentStep: state.currentStep,
  };
};

export default connect(mapStateToProps, { updateStep })(ResContainer);
