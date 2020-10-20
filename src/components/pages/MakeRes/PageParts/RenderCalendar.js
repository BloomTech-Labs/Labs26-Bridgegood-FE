import React from 'react';
import { Calendar } from 'antd';
import { useDispatch } from 'react-redux';
import { UPDATE_DATE } from '../../../../state/reducers/MakeResReducer';

export default function RenderCalendar(props) {
  const dispatch = useDispatch();

  function onSelectChange(value) {
    dispatch({ type: UPDATE_DATE, payload: value.format('YYYY-MM-DD') });
  }

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
    </>
  );
}
