import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import { Row, Col, Divider } from 'antd';
import { config } from '../../../utils/oktaConfig';
import img from '../../../assets/images/logo.png';
import SignUp from '../../common/SignUp';
import Login from '../../common/Login';
import './Login.less';

const LoginContainer = () => {
  const location = useLocation();

  return (
    <Row className="signUpBox">
      <Col span={1}></Col>
      <Col span={10}>
        <Login enabled={location.pathname === '/login'} />
      </Col>
      <Col span={1}></Col>
      <Col span={11}>
        <SignUp enabled={location.pathname === '/signup'} />
      </Col>
      <Col span={1}></Col>
    </Row>
  );
};

export default LoginContainer;
