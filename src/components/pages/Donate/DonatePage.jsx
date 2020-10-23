// The Donate page content goes here
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Image, Space, Row, Col, Menu, Breadcrumb } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';

import VenmoPay from './VenmoPay';
import DonationAmount from './DonationAmount';
import DonationBox from '../../common/DonationBox';

import img from '../../../assets/images/bridgegood_group_1.png';
import './DonatePage.css';


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

// const style = { background: '#0092ff', padding: '8px 0' };
// const style = { background: '#0092ff' };

// const style = { disabled: null };

export default function DonatePage() {
  const app = useSelector(state => state.app);
  const { user } = useSelector(state => state.app);

  return (
    <>
      <Layout className="layout">
        <Content>
          <Row gutter={[16, 16]} justify="space-around" align="middle">
            <Col span={10}>
              {/* {!app.isLoggedIn && <h1>Not logged in</h1>}
              {app.isLoggedIn && !user && <h1>Loading Profile</h1>}
              {app.isLoggedIn && user.email && (
                <h1>Logged In as {user.email} </h1>
              )} */}
              {/* <DonationAmount /> */}
              <DonationBox />
              {/* <VenmoPay containerId={Math.ceil(Math.random() * 1000)} /> */}
            </Col>
            <Col span={10}>
              <Row gutter={[2, 16]} justify="space-around" align="middle">
                <Col span={7}>
                  <h2 className="donate-title">FUNDED BY THE COMMUNITY</h2>
                </Col>
                <Col span={15}>
                  <p className="donate-content">
                    100% of your donations help fund the BRIDGEGOOD Community
                    Studio, which serves the Bay Area students of design.
                  </p>
                </Col>
              </Row>
              <Row gutter={[2, 16]} justify="space-around" align="middle">
                <Col span={7}>
                  <h2 className="donate-title">PAY IT FORWARD</h2>
                </Col>
                <Col span={15}>
                  <p className="donate-content">
                  By making a donation now, you are able to support students
                  in the community to use the space and connect with other
                  creatives of color.
                  </p>
                </Col>
              </Row>
              <Row justify="space-around" align="middle">
                <Col>
                  <Image src={img} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
}
