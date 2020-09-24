import React from 'react';
import { Button, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { updateTimeSlot } from '../../../../state/actions/TimeSlotActions';

function RenderTimeSlot(props) {
  return (
    <>
      <Row>
        <Col span={4}>
          <Button onClick={()=> props.updateTimeSlot('10')}>10:00am</Button>
          <Button onClick={()=> props.updateTimeSlot('11')}>11:00am</Button>
          <Button onClick={()=> props.updateTimeSlot('12')}>12:00pm</Button>
          <Button onClick={()=> props.updateTimeSlot('13')}>01:00pm</Button>
        </Col>
        <Col span={4}>
          <Button onClick={()=> props.updateTimeSlot('14')}>2:00pm</Button>
          <Button onClick={()=> props.updateTimeSlot('15')}>3:00pm</Button>
          <Button onClick={()=> props.updateTimeSlot('16')}>4:00pm</Button>
          <Button onClick={()=> props.updateTimeSlot('17')}>5:00pm</Button>
        </Col>
      </Row>
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

