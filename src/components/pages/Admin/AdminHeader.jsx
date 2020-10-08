import React from 'react';
import { Layout, Row, Col, Image } from 'antd';
import ImageWrapper from './TestWrapper';

// import '../../assets/images/bridgegood_logo_admin.png'
import logoSrc from '../../../assets/images/bridgegood_logo_admin.png';

export default function AdminHeader() {
  return (
    <Layout.Header height="300px">
      {/* <Image src={logoSrc} width={300} />
          <div>
            <h1>Flex Middle</h1>
          </div>
          <div>
            <h1>Logout</h1>
          </div>
          <div>
            <h1>Welcome, Shaun!</h1>
          </div> */}

      <Row align="middle">
        <Col flex="300px">
          <ImageWrapper src={logoSrc} />
          {/* <Image src={logoSrc} width={300} /> */}
        </Col>
        <Col flex="auto">
          <div>
            <h1>Flex Middle</h1>
          </div>
        </Col>
        <Col flex="300px">
          <div>
            <h1>Logout</h1>
          </div>
          <div>
            <h1>Welcome, Shaun!</h1>
          </div>
        </Col>
      </Row>
    </Layout.Header>
  );
}
