import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'antd';
import RenderCalendar from './PageParts/RenderCalendar';
import RenderRoomPick from './PageParts/RenderRoomPick';
import RenderTimeSlot from './PageParts/RenderTimeSlot';
import Header from '../Home/Landing/Header/index';
import Footer from '../Home/Landing/Footer/Footer';

function ResContainer() {
  return (
    <>
      <Header />
      <h1>Make a Reservation </h1>
      <Row>
        <Col span={8}>
          <h2>Select a Date</h2>
          <RenderCalendar />
        </Col>
        <Col span={8}>
          <h2>Select a Room</h2>
          <RenderRoomPick />
        </Col>
        <Col span={8}>
          <h2>Select Time</h2>
          <RenderTimeSlot />
        </Col>
      </Row>

      <Button>
        <Link to="/">Back To Home</Link>
      </Button>
      <Footer />
    </>
  );
}

export default ResContainer;
