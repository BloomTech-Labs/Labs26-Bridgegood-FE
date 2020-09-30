// Admin Layout Container component
// Acts as a "layout page" by taking a page content parameter
// Wraps content and adds extra stuff, like header and footer, and determines the general layout;
// Also, passes down global state (like auth state)

import React, { useState, useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import AdminHeader from './AdminHeader';
import AdminFooter from './AdminFooter';

import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export default function AdminContainer({ PageContent }) {
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
        <AdminHeader
          isLoggedIn={authState.isAuthenticated}
          userInfo={userInfo}
          authService={authService}
        />
        <Layout>
          <Layout.Sider>Sider</Layout.Sider>
          <PageContent
            isLoggedIn={authState.isAuthenticated}
            userInfo={userInfo}
            authService={authService}
          />
        </Layout>
        <AdminFooter />
      </Layout>
    </>
  );
}
