import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Radio, Button } from 'antd';

const initialValue = {
  value: 2,
};

function ResTime() {
  const [timeAmount, setTimeAmount] = useState(initialValue);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setTimeAmount({
      value: e.target.value,
    });
  };

  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };

  const { value } = timeAmount;

  return (
    <div>
      <h>How much time will you need at the Community Co-Working space?</h>
      <div>
        <Radio.Group onChange={onChange} value={value}>
          <Radio style={radioStyle} value={1}>
            1-2 Hours
          </Radio>
          <Radio style={radioStyle} value={2}>
            3-4 Hours
          </Radio>
          <Radio style={radioStyle} value={3}>
            6 Hours
          </Radio>
        </Radio.Group>
      </div>

      <div>
        <Button>
          <Link to="/make-res">Next</Link>
        </Button>
      </div>
    </div>
  );
}

export default ResTime;
