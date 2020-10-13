import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { UPDATE_TIME_SLOT } from '../../../../state/actions/TimeSlotActions';
import { UPDATE_STEP } from '../../../../state/actions/StepsActions';
import '../MakeRes.css';

export default function RenderTimeSlot() {
  const dispatch = useDispatch();
  const { date, time_slot, duration, room, currentStep } = useSelector(
    state => state.reservation
  );

  // updateTimeSlot, updateStep

  // const duration = props.duration;
  const clicked = time_slot;
  // const roomSelected = props.room;
  console.log('ROOM SELECTED', room);

  const nextStep = () => {
    dispatch({ type: UPDATE_STEP, payload: 2 });
  };

  if (room === 'None' || date === undefined) {
    return (
      <>
        <div className="timeSlotBox-greyOut">
          <div className="row-ts">
            <div className="col-ts">
              <div className="greyOut">10:00am</div>
              <div className="greyOut">11:00am</div>
              <div className="greyOut">12:00pm</div>
              <div className="greyOut">01:00pm</div>
            </div>
            <div className="col-ts">
              <div className="greyOut">2:00pm</div>
              <div className="greyOut">3:00pm</div>
              <div className="greyOut">4:00pm</div>
              <div className="greyOut">5:00pm</div>
            </div>
          </div>
          <div className="final-btn-disabled">Finalize Reservation</div>
        </div>
        {/* <h2> You've Selected = {props.timeSlotOnProps}</h2> */}
      </>
    );
  } else {
    if (duration === '1-2 Hours') {
      return (
        <>
          <div className="timeSlotBox">
            <div className="row-ts">
              <div className="col-ts">
                <div
                  onClick={() =>
                    dispatch({ type: UPDATE_TIME_SLOT, payload: '10' })
                  }
                  className={clicked === '10' ? 'tsBtnActive' : 'tsBtn'}
                >
                  10:00am
                </div>
                <div
                  onClick={() =>
                    dispatch({ type: UPDATE_TIME_SLOT, payload: '11' })
                  }
                  className={clicked === '11' ? 'tsBtnActive' : 'tsBtn'}
                >
                  11:00am
                </div>
                <div
                  onClick={() =>
                    dispatch({ type: UPDATE_TIME_SLOT, payload: '12' })
                  }
                  className={clicked === '12' ? 'tsBtnActive' : 'tsBtn'}
                >
                  12:00pm
                </div>
                <div
                  onClick={() =>
                    dispatch({ type: UPDATE_TIME_SLOT, payload: '13' })
                  }
                  className={clicked === '13' ? 'tsBtnActive' : 'tsBtn'}
                >
                  01:00pm
                </div>
              </div>
              <div className="col-ts">
                <div
                  onClick={() =>
                    dispatch({ type: UPDATE_TIME_SLOT, payload: '14' })
                  }
                  className={clicked === '14' ? 'tsBtnActive' : 'tsBtn'}
                >
                  2:00pm
                </div>
                <div
                  onClick={() =>
                    dispatch({ type: UPDATE_TIME_SLOT, payload: '15' })
                  }
                  className={clicked === '15' ? 'tsBtnActive' : 'tsBtn'}
                >
                  3:00pm
                </div>
                <div
                  onClick={() =>
                    dispatch({ type: UPDATE_TIME_SLOT, payload: '16' })
                  }
                  className={clicked === '16' ? 'tsBtnActive' : 'tsBtn'}
                >
                  4:00pm
                </div>
                <div
                  onClick={() =>
                    dispatch({ type: UPDATE_TIME_SLOT, payload: '17' })
                  }
                  className={clicked === '17' ? 'tsBtnActive' : 'tsBtn'}
                >
                  5:00pm
                </div>
              </div>
            </div>
            <div
              className={
                clicked === '10' ||
                clicked === '11' ||
                clicked === '12' ||
                clicked === '13' ||
                clicked === '14' ||
                clicked === '15' ||
                clicked === '16' ||
                clicked === '17'
                  ? 'finalBtn'
                  : 'final-btn-disabled'
              }
              onClick={nextStep}
            >
              Finalize Reservation
            </div>
          </div>
          {/* <h2> You've Selected = {props.timeSlotOnProps}</h2> */}
        </>
      );
    } else if (duration === '3-4 Hours') {
      return (
        <>
          <div className="timeSlotBox">
            <div className="row-ts">
              <div className="col-ts">
                <div
                  onClick={() =>
                    dispatch({ type: UPDATE_TIME_SLOT, payload: '10' })
                  }
                  className={clicked === '10' ? 'tsBtnActive' : 'tsBtn'}
                >
                  10:00am
                </div>
                <div
                  onClick={() =>
                    dispatch({ type: UPDATE_TIME_SLOT, payload: '11' })
                  }
                  className={clicked === '11' ? 'tsBtnActive' : 'tsBtn'}
                >
                  11:00am
                </div>
                <div
                  onClick={() =>
                    dispatch({ type: UPDATE_TIME_SLOT, payload: '12' })
                  }
                  className={clicked === '12' ? 'tsBtnActive' : 'tsBtn'}
                >
                  12:00pm
                </div>
                <div
                  onClick={() =>
                    dispatch({ type: UPDATE_TIME_SLOT, payload: '13' })
                  }
                  className={clicked === '13' ? 'tsBtnActive' : 'tsBtn'}
                >
                  01:00pm
                </div>
              </div>
              <div className="col-ts">
                <div
                  onClick={() =>
                    dispatch({ type: UPDATE_TIME_SLOT, payload: '14' })
                  }
                  className={clicked === '14' ? 'tsBtnActive' : 'tsBtn'}
                >
                  2:00pm
                </div>
                <div
                  onClick={() =>
                    dispatch({ type: UPDATE_TIME_SLOT, payload: '15' })
                  }
                  className={clicked === '15' ? 'tsBtnActive' : 'tsBtn'}
                >
                  3:00pm
                </div>
                <div className="greyOut">4:00pm</div>
                <div className="greyOut">5:00pm</div>
              </div>
            </div>
            <div
              className={
                clicked === '10' ||
                clicked === '11' ||
                clicked === '12' ||
                clicked === '13' ||
                clicked === '14' ||
                clicked === '15'
                  ? 'finalBtn'
                  : 'final-btn-disabled'
              }
              onClick={nextStep}
            >
              Finalize Reservation
            </div>
          </div>
          {/* <h2> You've Selected = {props.timeSlotOnProps}</h2> */}
        </>
      );
    } else if (duration === '6 Hours') {
      return (
        <>
          <div className="timeSlotBox">
            <div className="row-ts">
              <div className="col-ts">
                <div
                  onClick={() =>
                    dispatch({ type: UPDATE_TIME_SLOT, payload: '10' })
                  }
                  className={clicked === '10' ? 'tsBtnActive' : 'tsBtn'}
                >
                  10:00am
                </div>
                <div
                  onClick={() =>
                    dispatch({ type: UPDATE_TIME_SLOT, payload: '11' })
                  }
                  className={clicked === '11' ? 'tsBtnActive' : 'tsBtn'}
                >
                  11:00am
                </div>
                <div
                  onClick={() =>
                    dispatch({ type: UPDATE_TIME_SLOT, payload: '12' })
                  }
                  className={clicked === '12' ? 'tsBtnActive' : 'tsBtn'}
                >
                  12:00pm
                </div>
                <div className="greyOut">01:00pm</div>
              </div>
              <div className="col-ts">
                <div className="greyOut">2:00pm</div>
                <div className="greyOut">3:00pm</div>
                <div className="greyOut">4:00pm</div>
                <div className="greyOut">5:00pm</div>
              </div>
            </div>
            <div
              className={
                clicked === '10' || clicked === '11' || clicked === '12'
                  ? 'finalBtn'
                  : 'final-btn-disabled'
              }
              onClick={nextStep}
            >
              Finalize Reservation
            </div>
          </div>
          {/* <h2> You've Selected = {props.timeSlotOnProps}</h2> */}
        </>
      );
    } else {
      return (
        <>
          <div className="timeSlotBox-greyOut">
            <div className="row-ts">
              <div className="col-ts">
                <div className="greyOut">10:00am</div>
                <div className="greyOut">11:00am</div>
                <div className="greyOut">12:00pm</div>
                <div className="greyOut">01:00pm</div>
              </div>
              <div className="col-ts">
                <div className="greyOut">2:00pm</div>
                <div className="greyOut">3:00pm</div>
                <div className="greyOut">4:00pm</div>
                <div className="greyOut">5:00pm</div>
              </div>
            </div>
            <div className="final-btn-disabled">Finalize Reservation</div>
          </div>
          {/* <h2> You've Selected = {props.timeSlotOnProps}</h2> */}
        </>
      );
    }
  }
}

// const mapStateToProps = state => {
//   return {
//     date: state.date,
//     timeSlotOnProps: state.time_slot,
//     duration: state.duration,
//     room: state.room,
//     currentStep: state.currentStep,
//   };
// };

// export default connect(mapStateToProps, { updateTimeSlot, updateStep })(
//   RenderTimeSlot
// );
