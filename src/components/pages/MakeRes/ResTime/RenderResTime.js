import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

function ResTime() {
  const [time, setTime] = useState();

  const onTimeChange = () => {
    return null;
  };

  return (
    <div>
      <h>How much time will you need at the Community Co-Working space?</h>

      <div>
        <p>
          <input type="radio" value="1-2" name="time" /> 1-2 Hours
        </p>
        <p>
          <input type="radio" value="3-4" name="time" /> 3-4 Hours
        </p>
        <p>
          <input type="radio" value="6" name="time" /> 6 Hours
        </p>
      </div>

      <Button>
        <Link to="/make-res">Next</Link>
      </Button>
    </div>
  );
}

export default ResTime;
