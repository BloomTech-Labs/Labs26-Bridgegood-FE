import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'antd';

import RenderCalendar from './PageParts/RenderCalendar';
import RenderRoomPick from './PageParts/RenderRoomPick';
import RenderTimeSlot from './PageParts/RenderTimeSlot';
import Header from '../Home/Landing/Header/index';
import Footer from '../Home/Landing/Footer/Footer';
import './MakeRes.css'

function ResContainer(props) {

  return (
    <>
      <Header />
      <div className='bigbox'>
      <Row>
        <Col span={8}>
          <h2>Select a Date</h2>
          <div className='components'>
            <RenderCalendar 
            />
          </div>
        </Col>
        <Col span={8}>
          <h2>Select a Room</h2>
          <div className='components'>
            <RenderRoomPick 
            />
          </div>
        </Col>
        <Col span={8}>
          <h2>Select Time</h2>
          <div className='components'>
            <RenderTimeSlot 
            />
          </div>
        </Col>
      </Row>
      </div>
      <Button>
        <Link to="/">Back To Home</Link>
      </Button>
      <Footer />
    </>
  );
}

export default ResContainer;
