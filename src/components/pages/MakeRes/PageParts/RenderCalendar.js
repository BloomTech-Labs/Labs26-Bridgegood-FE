import React, { useState } from 'react';
import { Calendar, Button } from 'antd';
import { connect } from 'react-redux';
import { updateDate } from '../../../../state/actions/CalActions';

function RenderCalendar(props) {
  function onPanelChange(value, mode) {
    console.log(value.format('YYYY-MM-DD'), mode);
  }
  const [ newDate, setNewDate] = useState()

  function onSelectChange(value) {
    console.log(value.format('YYYY-MM-DD'))
    setNewDate(value.format('YYYY-MM-DD'));
  }
  const value = newDate;

  return (
    <>
      <div style={{ width: 500, border: '1px solid #4E4E4E' }}>
        <Calendar 
          fullscreen={false} 
          onPanelChange={onPanelChange}
          onSelect={onSelectChange}
        />
        <Button onClick={() => props.updateDate(value)}>
          Select Date
        </Button>
      </div>
      <h2> You've Selected = {props.dateOnProps}</h2>
    </>
  );
};

const mapStateToProps = state => {
  console.log("STATE", state);
  return {
    dateOnProps: state.date
  };
};

export default connect(mapStateToProps, { updateDate })(RenderCalendar);
