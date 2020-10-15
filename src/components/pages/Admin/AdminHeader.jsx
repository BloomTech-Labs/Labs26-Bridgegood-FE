import React from 'react';
import { Layout, Button, Space, Typography, Row, Col, Divider } from 'antd';
import ImageWrapper from './TestWrapper';

import logoSrc from '../../../assets/images/bridgegood_logo_admin.png';

export default function AdminHeader() {
  const Height = {
    height: '64px'
  }
  return (
    <Layout.Header>
      <Row>
        <Col span={6}>
          <ImageWrapper src={logoSrc} desc='BridgeGood Community Text Logo' style={{
            img: {
              height: '64px',
            }
          }} />

        </Col>
        <Col span={3} offset={15}>
          <Space direction='horizontal'>
            <Button type='link'>Logout</Button>
            <Typography.Text style={{
              color: 'white'
            }}>Welcome, Shaun!</Typography.Text>
          </Space>
        </Col>
      </Row>
    </Layout.Header>
  );
}
