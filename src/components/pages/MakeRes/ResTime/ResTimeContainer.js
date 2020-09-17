import React, { useState } from 'react';

import RenderResTime from './RenderResTime';

function ResTimeContainer({ LoadingComponent }) {
  const [timeAmount, setTimeAmount] = useState(1);

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
    <>
      <RenderResTime
        onChange={onChange}
        radioStyle={radioStyle}
        value={value}
      />
    </>
  );
}

export default ResTimeContainer;
