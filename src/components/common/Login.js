import React, { useEffect } from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import { config } from '../../utils/oktaConfig';
import img from '../../assets/images/LOG_IN_TO_RESERVE.png';
import logoImg from '../../assets/images/logo.png';
import { useHistory } from 'react-router-dom';

export default function Login({ enabled }) {
  // destructure your config so that you can pass it into the required fields in your widget.
  const { pkce, issuer, clientId, redirectUri, scopes } = config;
  // const history = useHistory();

  useEffect(() => {
    // if (redirPath == window.location.origin) {
    //   redirPath = window.location.origin + '/welcome';
    // }

    // destructure your config so that you can pass it into the required fields in your widget.
    const widget = new OktaSignIn({
      baseUrl: issuer ? issuer.split('/oauth2')[0] : '',
      clientId,
      // redirectUri: redirPath,
      redirectUri,
      // takes a few different hooks, the config options
      registration: {
        // there is more we can do to handle some errors here.
      },
      features: { registration: false },
      // turning this feature on allows your widget to use Okta for user registration
      logo: img,
      // add your custom logo to your signing/register widget here.
      colors: {
        brand: '#002171',
      },
      i18n: {
        // Overriding English properties
        en: {
          'primaryauth.title': ' ',
          'primaryauth.username.placeholder': 'Email address',
        },
      },
      authParams: {
        pkce,
        issuer,
        display: 'page',
        scopes,
      },
    });

    widget.renderEl(
      { el: '#sign-in-widget' },
      () => {
        /**
         * In this flow, the success handler will not be called because we redirect
         * to the Okta org for the authentication workflow.
         */
      },
      err => {
        throw err;
      }
    );

    // handle unmount event
    return () => {
      try {
        widget.remove();
      } catch {}
    };
  }, []);

  return (
    <div disabled={!enabled}>
      <section className="main-container">
        <div className="welcome-text"></div>
        <div id="sign-in-widget" />
      </section>
    </div>
  );
}
