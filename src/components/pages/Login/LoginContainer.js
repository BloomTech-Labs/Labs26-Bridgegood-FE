import React, { useEffect } from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import { Row, Col, Divider } from 'antd';
import { config } from '../../../utils/oktaConfig';
import img from '../../../assets/images/logo.png';
import SignUp from '../../common/SignUp';
import Login from '../../common/Login';
import './Login.less';

const LoginContainer = () => {
  useEffect(() => {
    const { pkce, issuer, clientId, redirectUri, scopes } = config;
    // destructure your config so that you can pass it into the required fields in your widget.
    const widget = new OktaSignIn({
      baseUrl: issuer ? issuer.split('/oauth2')[0] : '',
      clientId,
      redirectUri,
      // takes a few different hooks, the config options
      registration: {
        // there is more we can do to handle some errors here.
      },
      features: { registration: false },
      // turning this feature on allows your widget to use Okta for user registration
      logo: img,
      // add your custom logo to your signing/register widget here.
      i18n: {
        en: {
          'primaryauth.title': 'LOG IN',
          // change title for your app
        },
      },
      authParams: {
        pkce,
        issuer,
        display: 'page',
        scopes,
      },
    });

    // widget.renderEl(
    //   { el: '#sign-in-widget' },
    //   () => {
    //     /**
    //      * In this flow, the success handler will not be called because we redirect
    //      * to the Okta org for the authentication workflow.
    //      */
    //   },
    //   err => {
    //     throw err;
    //   }
    // );
  }, []);

  return (
    <div className="loginBox">
      <section>
        <Login enabled={true} />
      </section>
      <section>
        <SignUp enabled={false} />
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
