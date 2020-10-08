import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'antd/dist/antd.css';
import { Radio } from 'antd';
import { UPDATE_DURATION } from '../../../../state/actions/DurationAction';
import { UPDATE_STEP } from '../../../../state/actions/StepsActions';
import '../MakeRes.css';

const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
  margin: '.75rem 0',
  lineHeight: '25.78px',
  fontSize: '20px',
};

export default function RenderDuration() {
  const dispatch = useDispatch();
  const reservationObj = useSelector(state => state.reservation);
  const { duration } = useSelector(state => state.reservation);
  const [selectedDuration, setSelectedDuration] = useState(Number(duration));

  const nextStep = () => {
    dispatch({ type: UPDATE_STEP, payload: 1 });
    dispatch({ type: UPDATE_DURATION, payload: selectedDuration });
  };

  function debugFunc() {
    console.log(reservationObj);
    console.log(selectedDuration);
  }

  const onDurationChange = e => {
    setSelectedDuration(e.target.value);
  };

  return (
    <>
      <div className="duration-page">
        <div className="radio-box">
          <h1>
            How much time will you need at the <br /> Community Co-Working
            Space?{' '}
          </h1>
          <button onClick={debugFunc}>Print Redux Global State</button>

          <div>
            <div className="radio-group">
              <Radio.Group onChange={onDurationChange} value={selectedDuration}>
                <Radio
                  style={radioStyle}
                  value={2}
                  checked={selectedDuration === 2}
                >
                  1 - 2 Hours
                </Radio>
                <Radio
                  style={radioStyle}
                  value={4}
                  checked={selectedDuration === 4}
                >
                  3 - 4 Hours
                </Radio>
                <Radio
                  style={radioStyle}
                  value={6}
                  checked={selectedDuration === 6}
                >
                  6 Hours
                </Radio>
              </Radio.Group>
            </div>
            {selectedDuration === 0 && (
              <div className="radioBtn-disactive">Next</div>
            )}
            {selectedDuration > 0 && (
              <div className="radioBtn-active" onClick={nextStep}>
                Next
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
