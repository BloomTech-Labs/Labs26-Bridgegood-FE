import React, { useEffect } from 'react';
import { Layout, Button, Space, Typography, Row, Col, Divider } from 'antd';
import ImageWrapper from './TestWrapper';

import logoSrc from '../../../assets/images/bridgegood_logo_admin.png';
import { useDispatch, useSelector } from 'react-redux';
import newAxios from '../../../utils/axiosUtils';
import { getOktaAuthToken } from '../../../utils/oktaUtils';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';

export default function AdminHeader() {
  const user = useSelector(state => state.app.user);
  const dispatch = useDispatch();
  const { authState } = useOktaAuth();
  useEffect(() => {
    const axios = newAxios(getOktaAuthToken(authState));
    axios.get('/users').then(({ data }) => {
      console.log(data);
      dispatch({ type: 'ADMIN_SET_USERS', payload: data });
    });
  }, []);
  return (
    <Layout.Header>
      <Row>
        <Col
          style={{
            display: 'flex',
          }}
          span={24}
        >
          <ImageWrapper
            src={logoSrc}
            desc="BridgeGood Community Text Logo"
            style={{
              marginRight: 'auto',
              height: '64px',
              img: {
                height: '64px',
              },
            }}
          />
          <Space
            style={{
              height: '64px',
            }}
            direction="horizontal"
          >
            <Button type="link">Logout</Button>
            <Typography.Text
              style={{
                color: 'white',
              }}
            >
              Welcome, {user.firstName}!
            </Typography.Text>
          </Space>
        </Col>
      </Row>
    </Layout.Header>
  );
}
