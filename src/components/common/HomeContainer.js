// Home Layout Container component
// Acts as a "layout page" by taking a page content parameter
// Wraps content and adds extra stuff, like header and footer, and determines the general layout;
// Also, passes down global state (like auth state)

import React, { useState, useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import RenderHeader from './Header/RenderHeader';
import RenderFooter from './Footer/RenderFooter';

import { Layout } from 'antd';

// const { Footer, Sider, Content } = Layout;
const { Header, Footer, Sider, Content } = Layout;

export default function HomeContainer({ PageContent }) {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  // eslint-disable-next-line
  const [memoAuthService] = useMemo(() => [authService], []);

  useEffect(() => {
    let isSubscribed = true;

    memoAuthService
      .getUser()
      .then(info => {
        // if user is authenticated we can use the authService to snag some user info.
        // isSubscribed is a boolean toggle that we're using to clean up our useEffect.
        if (isSubscribed) {
          setUserInfo(info);
        }
      })
      .catch(err => {
        isSubscribed = false;
        return setUserInfo(null);
      });
    return () => (isSubscribed = false);
  }, [memoAuthService]);

  return (
    <>
      <Layout>
        {/* <Header> */}
        <RenderHeader
          isLoggedIn={authState.isAuthenticated}
          userInfo={userInfo}
          authService={authService}
        />
        {/* </Header> */}
        <Content>
          <PageContent
            isLoggedIn={authState.isAuthenticated}
            userInfo={userInfo}
            authService={authService}
          />
        </Content>
        <Footer>
          <RenderFooter />
        </Footer>
      </Layout>
    </>
  );
}
