import React from 'react';
import { Button, Col } from 'antd';

function RenderRoomPick() {
  return (
    <Col span={1}>
      <Button>Front Room</Button>
      <Button>Back Room</Button>
    </Col>
  );
}

export default RenderRoomPick;
