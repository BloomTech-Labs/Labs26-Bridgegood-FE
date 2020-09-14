import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import RenderCalendar from './PageParts/RenderCalendar';
import RenderRoomPick from './PageParts/RenderRoomPick';
import RenderTimeSlot from './PageParts/RenderTimeSlot';

function ResContainer() {
  return (
    <div>
      <h1>Make a Reservation </h1>
      <div>
        <RenderCalendar />
        <RenderRoomPick />
        <RenderTimeSlot />
      </div>

      <Button>
        <Link to="/">Back To Home</Link>
      </Button>
    </div>
  );
}

export default ResContainer;
