import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

function RenderMakeRes() {
  return (
    <div>
      <h1>Make a Reservation </h1>
      <Button>
        <Link to="/">Back To Home</Link>
      </Button>
    </div>
  );
}

export default RenderMakeRes;
