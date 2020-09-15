import React from 'react';
import { Button, Row, Col } from 'antd';

function RenderTimeSlot() {
  return (
    <Row>
      <Col span={4}>
        <Button>10:00am</Button>
        <Button>11:00am</Button>
        <Button>12:00pm</Button>
        <Button>01:00pm</Button>
      </Col>
      <Col span={4}>
        <Button>2:00pm</Button>
        <Button>3:00pm</Button>
        <Button>4:00pm</Button>
        <Button>5:00pm</Button>
      </Col>
    </Row>
  );
}

export default RenderTimeSlot;
