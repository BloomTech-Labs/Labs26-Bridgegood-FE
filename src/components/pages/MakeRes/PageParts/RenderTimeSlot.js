import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateTimeSlot } from '../../../../state/actions/TimeSlotActions';
import { updateStep } from '../../../../state/actions/StepsActions';
import '../MakeRes.css';

function RenderTimeSlot(props) {
  const duration = props.duration;
  const clicked = props.timeSlotOnProps;
  const roomSelected = props.room;
  console.log('ROOM SELECTED', roomSelected);

  const nextStep = () => {
    props.updateStep(2);
  };

  if (roomSelected === 'None' || props.date === undefined) {
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
                  onClick={() => props.updateTimeSlot('10')}
                  className={clicked === '10' ? 'tsBtnActive' : 'tsBtn'}
                >
                  10:00am
                </div>
                <div
                  onClick={() => props.updateTimeSlot('11')}
                  className={clicked === '11' ? 'tsBtnActive' : 'tsBtn'}
                >
                  11:00am
                </div>
                <div
                  onClick={() => props.updateTimeSlot('12')}
                  className={clicked === '12' ? 'tsBtnActive' : 'tsBtn'}
                >
                  12:00pm
                </div>
                <div
                  onClick={() => props.updateTimeSlot('13')}
                  className={clicked === '13' ? 'tsBtnActive' : 'tsBtn'}
                >
                  01:00pm
                </div>
              </div>
              <div className="col-ts">
                <div
                  onClick={() => props.updateTimeSlot('14')}
                  className={clicked === '14' ? 'tsBtnActive' : 'tsBtn'}
                >
                  2:00pm
                </div>
                <div
                  onClick={() => props.updateTimeSlot('15')}
                  className={clicked === '15' ? 'tsBtnActive' : 'tsBtn'}
                >
                  3:00pm
                </div>
                <div
                  onClick={() => props.updateTimeSlot('16')}
                  className={clicked === '16' ? 'tsBtnActive' : 'tsBtn'}
                >
                  4:00pm
                </div>
                <div
                  onClick={() => props.updateTimeSlot('17')}
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
                  onClick={() => props.updateTimeSlot('10')}
                  className={clicked === '10' ? 'tsBtnActive' : 'tsBtn'}
                >
                  10:00am
                </div>
                <div
                  onClick={() => props.updateTimeSlot('11')}
                  className={clicked === '11' ? 'tsBtnActive' : 'tsBtn'}
                >
                  11:00am
                </div>
                <div
                  onClick={() => props.updateTimeSlot('12')}
                  className={clicked === '12' ? 'tsBtnActive' : 'tsBtn'}
                >
                  12:00pm
                </div>
                <div
                  onClick={() => props.updateTimeSlot('13')}
                  className={clicked === '13' ? 'tsBtnActive' : 'tsBtn'}
                >
                  01:00pm
                </div>
              </div>
              <div className="col-ts">
                <div
                  onClick={() => props.updateTimeSlot('14')}
                  className={clicked === '14' ? 'tsBtnActive' : 'tsBtn'}
                >
                  2:00pm
                </div>
                <div
                  onClick={() => props.updateTimeSlot('15')}
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
                  onClick={() => props.updateTimeSlot('10')}
                  className={clicked === '10' ? 'tsBtnActive' : 'tsBtn'}
                >
                  10:00am
                </div>
                <div
                  onClick={() => props.updateTimeSlot('11')}
                  className={clicked === '11' ? 'tsBtnActive' : 'tsBtn'}
                >
                  11:00am
                </div>
                <div
                  onClick={() => props.updateTimeSlot('12')}
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

const mapStateToProps = state => {
  return {
    date: state.date,
    timeSlotOnProps: state.time_slot,
    duration: state.duration,
    room: state.room,
    currentStep: state.currentStep,
  };
};

export default connect(mapStateToProps, { updateTimeSlot, updateStep })(
  RenderTimeSlot
);
