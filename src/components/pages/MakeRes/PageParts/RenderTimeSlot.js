import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { updateTimeSlot } from '../../../../state/actions/TimeSlotActions';
import '../MakeRes.css'

function RenderTimeSlot(props) {
  return (
    <>
      <div className='timeSlotBox'>
        <div className='row'>
          <div className='col'>
            <div onClick={()=> props.updateTimeSlot('10')} className='tsbtn'>10:00am</div>
            <div onClick={()=> props.updateTimeSlot('11')} className='tsbtn'>11:00am</div>
            <divn onClick={()=> props.updateTimeSlot('12')} className='tsbtn'>12:00pm</divn>
            <div onClick={()=> props.updateTimeSlot('13')} className='tsbtn'>01:00pm</div>
          </div>
          <div className='col'>
            <div onClick={()=> props.updateTimeSlot('14')} className='tsbtn'>2:00pm</div>
            <div onClick={()=> props.updateTimeSlot('15')} className='tsbtn'>3:00pm</div>
            <div onClick={()=> props.updateTimeSlot('16')} className='tsbtn'>4:00pm</div>
            <div onClick={()=> props.updateTimeSlot('17')} className='tsbtn'>5:00pm</div>
          </div>
        </div>   
      </div>
    <h2> You've Selected = {props.timeSlotOnProps}</h2>
    </>
  );
}

const mapStateToProps = state => {
  console.log("STATE", state);
  return {
    timeSlotOnProps: state.time_slot
  };
};

export default connect(mapStateToProps, {updateTimeSlot})(RenderTimeSlot);

