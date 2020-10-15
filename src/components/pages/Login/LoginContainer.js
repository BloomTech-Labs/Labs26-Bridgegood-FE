import React, { useEffect } from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import { Row, Col, Divider } from 'antd';
import { config } from '../../../utils/oktaConfig';
import img from '../../../assets/images/logo.png';
import SignUp from '../../common/SignUp';
import Login from '../../common/Login';
import './Login.less';

const LoginContainer = ({ authType }) => {
  const type = authType ? authType : 'login';

  return (
    <div className="signUpBox">
      <section>
        <Login enabled={type === 'login'} />
      </section>
      <section>
        <SignUp enabled={type === 'signup'} />
      </section>
      {/* <section className="main-container">
        <div className="welcome-text"></div>
        <div id="sign-in-widget" />
        <Divider orientation="left"></Divider>
        <Row>
          <Col flex={1}>
            <Login enabled={true} />
          </Col>
          <Col flex={1}>
            <SignUp enabled={false} />
          </Col>
        </Row>
        <Divider orientation="left"></Divider>
      </section> */}
    </div>
  );
};

export default LoginContainer;
