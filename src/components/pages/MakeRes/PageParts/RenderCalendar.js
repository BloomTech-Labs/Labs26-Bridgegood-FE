import React, { useState } from 'react';
import { Calendar } from 'antd';
import { useDispatch } from 'react-redux';
import { UPDATE_DATE } from '../../../../state/actions/CalActions';

export default function RenderCalendar(props) {
  const dispatch = useDispatch();
  // const [newDate, setNewDate] = useState();

  function onSelectChange(value) {
    dispatch({ type: UPDATE_DATE, payload: value.format('YYYY-MM-DD') });
    // setNewDate(value.format('YYYY-MM-DD'));
  }
  // const value = newDate;
  // const ud = dispatch({type: UPDATE_DATE, payload: newDate}) // props.updateDate(value);

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
      {/* <h2> You've Selected = {props.dateOnProps}</h2> */}
    </>
  );
}

// const mapStateToProps = state => {
//   return {
//     dateOnProps: state.date,
//   };
// };

// export default connect(mapStateToProps, { updateDate })(RenderCalendar);
