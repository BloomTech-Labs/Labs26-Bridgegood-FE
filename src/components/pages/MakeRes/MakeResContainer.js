import React from 'react';
import { useSelector } from 'react-redux';

import RenderCalendar from './PageParts/RenderCalendar';
import RenderRoomPick from './PageParts/RenderRoomPick';
import RenderTimeSlot from './PageParts/RenderTimeSlot';
import ResSteps from './PageParts/RenderResSteps';
import { updateStep } from '../../../state/actions/StepsActions';
import RenderDuration from './PageParts/RenderDuration';
import { FinalizeResPage } from './FinalizeRes';
import './MakeRes.css';

export default function ResContainer(props) {
  // const currentStep = props.currentStep;
  const reservationObj = useSelector(state => state.reservation);
  const { currentStep } = useSelector(state => state.reservation);

  if (currentStep === 1) {
    return (
      <>
        <div className="steps-box">
          <div className="steps">
            <ResSteps />
          </div>
        </div>
        <button onClick={() => console.log(reservationObj)}>
          Print Redux Global State
        </button>
        ;
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

        <RenderDuration />
      </>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     currentStep: state.currentStep,
//   };
// };

// export default connect(mapStateToProps, { updateStep })(ResContainer);
