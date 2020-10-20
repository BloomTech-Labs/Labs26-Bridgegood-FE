import React from 'react';
import { useSelector } from 'react-redux';

import RenderCalendar from './PageParts/RenderCalendar';
import RenderRoomPick from './PageParts/RenderRoomPick';
import RenderTimeSlot from './PageParts/RenderTimeSlot';
import ResSteps from './PageParts/RenderResSteps';
import RenderDuration from './PageParts/RenderDuration';
import RenderFinalizeRes from './PageParts/RenderFinalizeRes';
import './MakeRes.css';

export default function ResContainer() {
  const { currentStep, room, date } = useSelector(state => state.reservation);

  if (currentStep === 1) {
    return (
      <>
        <div className="steps-box">
          <div className="steps">
            <ResSteps />
          </div>
        </div>
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
              <h2 className={date === '2011-11-11' ? 'h2-grey' : null}>
                Select a Room
              </h2>
              <div className="components">
                <RenderRoomPick />
              </div>
            </div>

            <div className="col-3 col">
              <h2 className={room === 'None' ? 'h2-grey' : null}>
                Select Opening
              </h2>
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
        <RenderFinalizeRes />
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
