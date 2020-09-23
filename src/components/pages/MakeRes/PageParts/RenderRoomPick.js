import React from 'react';
import { Button, Col } from 'antd';

function RenderRoomPick() {
  return (
    <Col span={1}>
      <Button>CoWorking Room</Button>
      <Button>Media Room</Button>
    </Col>
  );
}

export default RenderRoomPick;
