import React, { useState } from 'react';
import { Calendar } from 'antd';
import { connect } from 'react-redux';
import { updateDate } from '../../../../state/actions/CalActions';

function RenderCalendar(props) {
  const [newDate, setNewDate] = useState();

  function onSelectChange(value) {
    setNewDate(value.format('YYYY-MM-DD'));
  }
  const value = newDate;
  const ud = props.updateDate(value);

  return (
    <>
      <div
        style={{
          width: 500,
          border: '1px solid #4E4E4E',
          paddingBottom: '4rem',
        }}
      >
        <Calendar fullscreen={false} onSelect={onSelectChange} />
      </div>
      <h2> You've Selected = {props.dateOnProps}</h2>
    </>
  );
}

const mapStateToProps = state => {
  return {
    dateOnProps: state.date,
  };
};

export default connect(mapStateToProps, { updateDate })(RenderCalendar);
